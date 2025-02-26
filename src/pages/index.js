import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            See the latest - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className="container text--center text--primary text--bold" style={{ padding: 40,'align-items':'stretch'}} >
      Generative AI Is providing an impressive amount of capability for augmenting workstreams, thinking, creating, and more based off the entire available digitized knowledge on the planets.  The current main skill to learn is prompting.  You can simply ask AIs questions and get answers. To really tap into their superpowers, learning prompting skills is key.  We are beginning a blog series on prompting.
      <div className="container row" style={{gap:20, padding:20, 'justify-content':'space-between'}}>
      <Link to="blog/boolean-logic-post"><img className="card" src="/img/image.jpg"></img>AI Origins</Link>
      <Link to="/blog/advanced-prompt-engineering-strategies"><img  className="card" src="/img/image-2.jpg"></img>Prompting</Link>
      <Link to="https://github.com/louisroehrs"><img  className="card" src="/img/image-3.jpg"></img>The Future</Link>
      </div>
      </div>
      </main>
    </Layout>
  );
}
