import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

const CORE_REPO = "https://github.com/Termix-SSH/Termix";

/** Where to get help. Plugin pages point at the plugin's own repo. */
export default function SupportFooter({
  repository,
}: {
  repository?: string;
}): React.ReactNode {
  const repo = repository ?? CORE_REPO;
  return (
    <aside className={styles.support}>
      <p className={styles.title}>Need help?</p>
      <p className={styles.body}>
        Found a bug or want something added? Open an{" "}
        <Link to={`${repo}/issues/new/choose`}>issue on GitHub</Link>. Questions
        are welcome in the{" "}
        <Link to="https://discord.gg/jVQGdvHDrf">Discord</Link>.
      </p>
    </aside>
  );
}
