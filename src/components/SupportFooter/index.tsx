import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

export default function SupportFooter(): React.ReactNode {
  return (
    <aside className={styles.support}>
      <p className={styles.title}>Need help?</p>
      <p className={styles.body}>
        To report a bug or request a feature, open a{' '}
        <Link to="https://github.com/Termix-SSH/Support/issues/new/choose">support ticket</Link>.
        You need to be logged in to GitHub. Please be as detailed as possible, preferably in
        English.
      </p>
      <p className={styles.body}>
        For discussions and questions, join the{' '}
        <Link to="https://discord.gg/jVQGdvHDrf">Discord</Link> server.
      </p>
    </aside>
  );
}
