import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import DonatePage from "@site/src/components/DonatePage";
import styles from "./simple.module.css";

export default function Donate(): ReactNode {
  return (
    <Layout
      title="Donate"
      description="Help pay for Termix with a crypto donation."
    >
      <main className={styles.page}>
        <h1>Donate</h1>
        <p>
          Termix is free with no paid tier. If it saves you money or time, a
          donation helps pay for hosting and keeps it going. Scan a code or copy
          an address.
        </p>
        <DonatePage />
        <p className={styles.muted}>
          A company that wants a paid sponsor spot in the README can email{" "}
          <a href="mailto:mail@termix.site">mail@termix.site</a>.
        </p>
      </main>
    </Layout>
  );
}
