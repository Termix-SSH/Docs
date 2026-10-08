import React from "react";
import releases from "@site/src/data/releases.json";

type Platform = "windows" | "macos" | "linux";

const KIND_LABEL: Record<string, string> = {
  nsis: "Installer (.exe)",
  msi: "Installer (.msi)",
  portable: "Portable",
  dmg: "Disk image (.dmg)",
  appimage: "AppImage",
  deb: "Debian package (.deb)",
  flatpak: "Flatpak",
};

const ARCH_LABEL: Record<string, string> = {
  x64: "x64",
  ia32: "x86 (32-bit)",
  arm64: "ARM64",
  armv7l: "ARMv7",
  universal: "Universal (Intel and Apple Silicon)",
};

function size(bytes: number): string {
  return `${Math.round(bytes / 1024 / 1024)} MB`;
}

/** Download links for the newest release, read from GitHub at build time. */
export default function Downloads({
  platform,
}: {
  platform: Platform;
}): React.ReactNode {
  const rows = releases.assets
    .map((asset) => {
      const m = /^termix_([a-z]+)_([a-z0-9]+)_([a-z]+)\./.exec(asset.name);
      if (!m || m[1] !== platform) return null;
      if (m[3] === "mas") return null;
      return { ...asset, arch: m[2], kind: m[3] };
    })
    .filter(Boolean) as {
    name: string;
    url: string;
    size: number;
    arch: string;
    kind: string;
  }[];

  if (rows.length === 0) {
    return (
      <p>
        See the{" "}
        <a href="https://github.com/Termix-SSH/Termix/releases/latest">
          latest release
        </a>
        .
      </p>
    );
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>CPU</th>
            <th>File</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>{KIND_LABEL[r.kind] ?? r.kind}</td>
              <td>{ARCH_LABEL[r.arch] ?? r.arch}</td>
              <td>
                <a href={r.url}>{r.name}</a>
              </td>
              <td>{size(r.size)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        These are from{" "}
        <a href={releases.url}>
          {releases.tag.replace(/-tag$/, "").replace(/^release-/, "v")}
        </a>
        . Older versions are on the{" "}
        <a href="https://github.com/Termix-SSH/Termix/releases">
          releases page
        </a>
        .
      </p>
    </>
  );
}
