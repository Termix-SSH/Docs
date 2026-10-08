import React from "react";
import Link from "@docusaurus/Link";
import env from "@site/src/data/env.json";

interface EnvVar {
  name: string;
  description: string;
  default?: string;
  required?: boolean;
  secret?: boolean;
  docker?: boolean;
  deprecated?: string;
}

function Rows({ vars }: { vars: EnvVar[] }): React.ReactNode {
  return (
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>What it does</th>
        </tr>
      </thead>
      <tbody>
        {vars.map((v) => (
          <tr key={v.name} id={`env-${v.name.toLowerCase()}`}>
            <td>
              <code>{v.name}</code>
              {v.required && <> (required)</>}
              {v.docker && <> (Docker only)</>}
            </td>
            <td>{v.default ? <code>{v.default}</code> : null}</td>
            <td>{v.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Core env vars in one group, from env.catalog.json in the Termix repo. */
export function CoreEnv({ group }: { group: string }): React.ReactNode {
  const vars = (env.core as EnvVar[]).filter(
    (v) => (v as EnvVar & { group: string }).group === group,
  );
  return vars.length ? <Rows vars={vars} /> : null;
}

/** Every plugin's env vars, from each plugin's manifest. */
export function PluginEnv(): React.ReactNode {
  return (
    <>
      {env.plugins.map((p) => (
        <section key={p.id}>
          <h3 id={`plugin-${p.id}`}>
            <Link to={`/plugins/${p.id}`}>{p.name}</Link>
          </h3>
          <Rows vars={p.vars as EnvVar[]} />
        </section>
      ))}
    </>
  );
}

/** Just the vars for one plugin. */
export function PluginEnvFor({ id }: { id: string }): React.ReactNode {
  const plugin = env.plugins.find((p) => p.id === id);
  return plugin ? <Rows vars={plugin.vars as EnvVar[]} /> : null;
}
