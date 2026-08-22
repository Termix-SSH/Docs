# Kubernetes

Termix ships a Helm chart for running on Kubernetes. The chart lives in the [Termix repository](https://github.com/Termix-SSH/Termix) under `charts/termix`.

Termix and guacd run in the same pod. That keeps remote desktop recordings on one volume and avoids the mount problems you get when two pods on different nodes want the same `ReadWriteOnce` disk. The guacd port is not published through a Service, so only Termix can reach it.

## Installing

Clone the repository, then install the chart:

```sh
helm upgrade --install termix ./charts/termix \
  --namespace termix \
  --create-namespace
```

Check it came up:

```sh
kubectl -n termix port-forward svc/termix 8080:8080
```

Then open `http://localhost:8080`.

## Exposing it

Nothing is exposed outside the cluster by default. Pick whichever fits your setup.

### Ingress

Turn on `ingress` in your values and set the host:

```yaml
ingress:
  enabled: true
  className: nginx
  hosts:
    - host: termix.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: termix-tls
      hosts:
        - termix.example.com
```

There is a ready-made example at `charts/termix/values-gitops-example.yaml`. Copy it and change the host, TLS secret, storage class, and image tag:

```sh
helm upgrade --install termix ./charts/termix \
  --namespace termix \
  --create-namespace \
  --values charts/termix/values-gitops-example.yaml
```

### Traefik

If you use Traefik CRDs instead, there is `charts/termix/values-traefik.yaml`:

```sh
helm upgrade --install termix ./charts/termix \
  --namespace termix \
  --create-namespace \
  --values charts/termix/values-traefik.yaml
```

Set `traefik.ingressRoute.host`, `entryPoints`, and either `tls.secretName` or `tls.certResolver` to match your cluster.

## Storage

Termix keeps its database, encryption keys, and session recordings in a volume mounted at `/app/data`. The chart creates a 10Gi `ReadWriteOnce` claim by default:

```yaml
persistence:
  enabled: true
  size: 10Gi
  storageClass: ''
  existingClaim: ''
```

Set `storageClass` if your cluster has no default, or `existingClaim` to reuse a volume you already made.

## Database

The default is SQLite, stored in that volume. It needs no setup.

:::warning
SQLite works with one replica only. Move to PostgreSQL or MySQL before you raise `replicaCount` or turn on autoscaling, otherwise several pods end up writing to the same file.
:::

For PostgreSQL or MySQL, put the connection string in a secret and point the chart at it:

```sh
kubectl -n termix create secret generic termix-database \
  --from-literal=DATABASE_URL='postgres://user:password@host:5432/termix'
```

```yaml
database:
  dialect: postgres
  existingSecret:
    name: termix-database
    urlKey: DATABASE_URL
```

See [Database](/setup/database) for what the connection string should look like.

## Secrets

Sessions are signed with a JWT secret. Termix generates one on first start, but a generated secret lives in the pod's volume, so give it one yourself if you want logins to survive the pod being replaced.

Provide `JWT_SECRET`, and `GUACAMOLE_ENCRYPTION_KEY` if you use remote desktop, either through `secrets.create` in your values or an existing secret you made separately.

## Settings worth knowing

| Value                         | Default       | What it does                             |
| ----------------------------- | ------------- | ---------------------------------------- |
| `replicaCount`                | `1`           | Pods to run. Leave at 1 on SQLite        |
| `image.tag`                   | chart version | Termix image tag to pull                 |
| `service.port`                | `8080`        | Port the Service listens on              |
| `persistence.size`            | `10Gi`        | Size of the data volume                  |
| `database.dialect`            | `sqlite`      | `sqlite`, `postgres`, or `mysql`         |
| `guacd.enabled`               | `true`        | Run the guacd sidecar for remote desktop |
| `autoscaling.enabled`         | `false`       | Needs Postgres or MySQL first            |
| `podDisruptionBudget.enabled` | `false`       | Keep a pod during node drains            |
| `networkPolicy.enabled`       | `false`       | Restrict pod traffic                     |

Anything Termix reads from the environment can go in `extraEnv` or `extraEnvFrom`. See [Environment Variables](/setup/environment-variables).

Turn off `guacd.enabled` if you do not use RDP, VNC, or Telnet, and the sidecar is not deployed.

## GitOps and CI

The repository has working examples for keeping a cluster in sync:

- **Argo CD**: `deploy/argocd/application.yaml`, or `application-traefik.yaml` for Traefik. Apply with `kubectl apply -f`.
- **GitHub Actions**: `.github/workflows/helm.yml` lints and renders the chart on pull requests, and can publish it to GHCR as an OCI chart from a manual run.
- **GitLab CI**: `deploy/gitlab/.gitlab-ci.yml` is a drop-in pipeline. Copy it to your repository root and set `KUBE_CONFIG` to a base64 encoded kubeconfig. The deploy job uses `helm upgrade --install --atomic`, so a failed rollout rolls itself back.

Once published to GHCR you can install the chart without cloning:

```sh
helm pull oci://ghcr.io/<owner>/charts/termix --version 0.1.0
```

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
