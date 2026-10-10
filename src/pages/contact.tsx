import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./simple.module.css";

export default function Contact(): ReactNode {
  return (
    <Layout title="Contact" description="How to reach the Termix team.">
      <main className={styles.page}>
        <h1>Contact</h1>
        <p>
          Email <Link href="mailto:mail@termix.site">mail@termix.site</Link> for
          business, sponsorship and anything else.
        </p>
        <p>
          For bugs and ideas, open an{" "}
          <Link href="https://github.com/Termix-SSH/Termix/issues/new/choose">
            issue on GitHub
          </Link>
          . For questions, join the{" "}
          <Link href="https://discord.gg/jVQGdvHDrf">Discord</Link>. Report
          security problems privately through{" "}
          <Link href="https://github.com/Termix-SSH/Termix/security/advisories/new">
            GitHub security advisories
          </Link>
          .
        </p>
      </main>
    </Layout>
  );
}
