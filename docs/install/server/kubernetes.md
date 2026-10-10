---
title: Kubernetes
description: Run Termix on Kubernetes with plain manifests.
---

# Kubernetes

Termix runs as one pod. If you use remote desktop, run guacd in the same pod. They then share one volume for recordings and drive files, and you avoid two pods fighting over a `ReadWriteOnce` disk.

Run one replica with SQLite. To run more than one, use [PostgreSQL or MySQL](/configure/database) and set `REDIS_URL` so plugins that keep live state, like Session Sharing, share it across pods.

## Manifests

Save this as `termix.yaml`, change the storage size and image tag if you want, then apply it.

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: termix
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: termix-data
  namespace: termix
spec:
  accessModes: [ReadWriteOnce]
  resources:
    requests:
      storage: 5Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: termix
  namespace: termix
spec:
  replicas: 1
  strategy:
    type: Recreate
  selector:
    matchLabels:
      app: termix
  template:
    metadata:
      labels:
        app: termix
    spec:
      containers:
        - name: termix
          image: ghcr.io/termix-ssh/termix:latest
          ports:
            - containerPort: 8080
          env:
            - name: PORT
              value: "8080"
            - name: GUACD_HOST
              value: "127.0.0.1"
            - name: GUACD_TUNNEL_HOST
              value: "127.0.0.1"
            - name: GUACD_RECORDING_PATH
              value: "/termix-data/session_recordings/guacamole"
            - name: GUACD_DRIVE_PATH
              value: "/termix-data/rdp-drive"
          volumeMounts:
            - name: data
              mountPath: /app/data
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 20
        - name: guacd
          image: guacamole/guacd:1.6.0
          volumeMounts:
            - name: data
              mountPath: /termix-data
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: termix-data
---
apiVersion: v1
kind: Service
metadata:
  name: termix
  namespace: termix
spec:
  selector:
    app: termix
  ports:
    - port: 8080
      targetPort: 8080
```

```bash
kubectl apply -f termix.yaml
kubectl -n termix port-forward svc/termix 8080:8080
```

Open `http://localhost:8080` and do the [first run](/install/first-run).

If you don't need remote desktop, remove the `guacd` container and the four `GUACD_` variables.

## Expose it

Nothing is reachable from outside the cluster yet. Add an Ingress in front of the Service, and make sure it passes WebSockets through. With ingress-nginx:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: termix
  namespace: termix
  annotations:
    nginx.ingress.kubernetes.io/proxy-read-timeout: "3600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "3600"
    nginx.ingress.kubernetes.io/proxy-body-size: "0"
spec:
  ingressClassName: nginx
  rules:
    - host: termix.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: termix
                port:
                  number: 8080
```

Set `TRUSTED_PROXIES` to your ingress controller's pod range so logs and the audit log show real client IPs. See [reverse proxy](/configure/reverse-proxy).

## Secrets

By default Termix makes its keys on first boot and keeps them in the data volume. To keep them in Kubernetes Secrets instead, mount them as files and point `JWT_SECRET_FILE`, `DATABASE_KEY_FILE`, `ENCRYPTION_KEY_FILE` and `INTERNAL_AUTH_TOKEN_FILE` at them. See [security](/configure/security#keys).
