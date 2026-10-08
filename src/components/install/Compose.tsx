import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { GUACD_IMAGE, IMAGE } from "@site/src/data/images";

type Variant = "full" | "minimal" | "postgres" | "mysql" | "https";

function compose(variant: Variant, tag: string): string {
  const image = `${IMAGE}:${tag}`;
  const guacd = variant !== "minimal";
  const env: string[] = ['      PORT: "8080"'];
  if (guacd) {
    env.push(
      '      GUACD_HOST: "guacd"',
      '      GUACD_TUNNEL_HOST: "termix"',
      '      GUACD_RECORDING_PATH: "/termix-data/session_recordings/guacamole"',
    );
  }
  if (variant === "postgres") {
    env.push(
      '      DATABASE_DIALECT: "postgres"',
      '      DATABASE_URL: "postgres://termix:change-me@postgres:5432/termix"',
    );
  }
  if (variant === "mysql") {
    env.push(
      '      DATABASE_DIALECT: "mysql"',
      '      DATABASE_URL: "mysql://termix:change-me@mysql:3306/termix"',
    );
  }
  if (variant === "https") {
    env.push(
      '      ENABLE_SSL: "true"',
      '      SSL_PORT: "8443"',
      '      SSL_DOMAIN: "termix.example.com"',
    );
  }

  const depends = [
    ...(guacd ? ["guacd"] : []),
    ...(variant === "postgres" ? ["postgres"] : []),
    ...(variant === "mysql" ? ["mysql"] : []),
  ];

  const lines = [
    "services:",
    "  termix:",
    `    image: ${image}`,
    "    container_name: termix",
    "    restart: unless-stopped",
    "    ports:",
    '      - "8080:8080"',
    ...(variant === "https" ? ['      - "8443:8443"'] : []),
    "    volumes:",
    "      - termix-data:/app/data",
    "    environment:",
    ...env,
    ...(depends.length
      ? ["    depends_on:", ...depends.map((d) => `      - ${d}`)]
      : []),
  ];

  if (guacd) {
    lines.push(
      "",
      "  guacd:",
      `    image: ${GUACD_IMAGE}`,
      "    container_name: guacd",
      "    restart: unless-stopped",
      "    volumes:",
      "      - termix-data:/termix-data",
    );
  }
  if (variant === "postgres") {
    lines.push(
      "",
      "  postgres:",
      "    image: postgres:17",
      "    restart: unless-stopped",
      "    environment:",
      "      POSTGRES_USER: termix",
      "      POSTGRES_PASSWORD: change-me",
      "      POSTGRES_DB: termix",
      "    volumes:",
      "      - postgres-data:/var/lib/postgresql/data",
    );
  }
  if (variant === "mysql") {
    lines.push(
      "",
      "  mysql:",
      "    image: mysql:8.4",
      "    restart: unless-stopped",
      "    environment:",
      "      MYSQL_USER: termix",
      "      MYSQL_PASSWORD: change-me",
      "      MYSQL_DATABASE: termix",
      "      MYSQL_ROOT_PASSWORD: change-me-too",
      "    volumes:",
      "      - mysql-data:/var/lib/mysql",
    );
  }
  lines.push("", "volumes:", "  termix-data:");
  if (variant === "postgres") lines.push("  postgres-data:");
  if (variant === "mysql") lines.push("  mysql-data:");
  return lines.join("\n");
}

/** A docker-compose.yml for the given setup. */
export function Compose({
  variant = "full",
  tag = "latest",
}: {
  variant?: Variant;
  tag?: string;
}): React.ReactNode {
  return (
    <CodeBlock language="yaml" title="docker-compose.yml">
      {compose(variant, tag)}
    </CodeBlock>
  );
}

/** The plain docker run command. */
export function DockerRun({
  tag = "latest",
}: {
  tag?: string;
}): React.ReactNode {
  return (
    <CodeBlock language="bash">
      {[
        "docker run -d \\",
        "  --name termix \\",
        "  --restart unless-stopped \\",
        "  -p 8080:8080 \\",
        "  -v termix-data:/app/data \\",
        `  ${IMAGE}:${tag}`,
      ].join("\n")}
    </CodeBlock>
  );
}

/** An image name, as inline code. */
export function Image({
  tag,
  hub = false,
}: {
  tag?: string;
  hub?: boolean;
}): React.ReactNode {
  const name = hub ? `docker.io/termixssh/termix` : IMAGE;
  return <code>{tag ? `${name}:${tag}` : name}</code>;
}
