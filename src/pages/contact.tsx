import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact(): ReactNode {
  return (
    <Layout title="Contact" description="Contact Termix">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center">
              <Heading as="h1">Contact</Heading>
              <p>
                For all inquiries, including business and support, reach out at{' '}
                <Link href="mailto:mail@termix.site">mail@termix.site</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
