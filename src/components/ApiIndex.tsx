import React from "react";
import Link from "@docusaurus/Link";
import specs from "@site/src/data/api-specs.json";
import PluginIcon from "./plugins/PluginIcon";
import { findPlugin } from "./plugins/data";

/** Every API spec on the site: core first, then each plugin. */
export default function ApiIndex(): React.ReactNode {
  return (
    <table>
      <thead>
        <tr>
          <th>API</th>
          <th>What it covers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to="/api/core/termix-api">Termix core</Link>
          </td>
          <td>
            Hosts, credentials, users, roles, sharing, plugins, sync and
            settings.
          </td>
        </tr>
        {specs.map((spec) => {
          const plugin = findPlugin(spec.id);
          return (
            <tr key={spec.id}>
              <td>
                <Link to={plugin?.apiPath ?? `/api/${spec.id}`}>
                  <PluginIcon name={plugin?.icon} size={13} /> {spec.name}
                </Link>
              </td>
              <td>{plugin?.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
