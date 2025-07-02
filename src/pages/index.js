import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useEffect } from 'react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import scroll animations
import '../js/scrollAnimations.js';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Strategic AI Implementation
          <br />
          <span className="text-gradient">for Enterprise Innovation</span>
        </Heading>
        <p className="hero__subtitle">
          Transforming Fortune 500 companies and high-growth startups through 
          strategic AI adoption that drives measurable business impact, 
          operational efficiency, and competitive advantage.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Explore AI Insights →
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/contact">
            Schedule Consultation
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
      title="Louis Roehrs | AI Strategy & Innovation Consulting"
      description="Strategic AI implementation consulting for enterprise innovation, cost optimization, and competitive advantage. Expert guidance for Fortune 500 companies and high-growth startups.">
      <HomepageHeader />
      <main>
        {/* Value Proposition Section */}
        <section className={styles.valueProposition}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2 className="text-gradient animate-on-scroll" data-animation="fade-in-up">Delivering Measurable Business Impact</h2>
                <p className="lead animate-on-scroll" data-animation="fade-in-up" data-stagger="1">
                  With over two decades of experience in AI and technology innovation, 
                  I help organizations unlock the full potential of artificial intelligence 
                  to achieve strategic objectives and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.services}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="card shadow-lg rounded-lg animate-on-scroll" data-animation="fade-in-left" data-stagger="1">
                  <div className="card__header">
                    <h3>🚀 AI Strategy & Roadmapping</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      Comprehensive AI strategy development, technology assessment, 
                      and implementation roadmaps aligned with business objectives 
                      and ROI targets.
                    </p>
                    <ul>
                      <li>Technology stack evaluation</li>
                      <li>ROI analysis & business case development</li>
                      <li>Change management planning</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card shadow-lg rounded-lg animate-on-scroll" data-animation="scale-in" data-stagger="2">
                  <div className="card__header">
                    <h3>⚡ Operational Efficiency</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      Streamline operations and reduce costs through intelligent 
                      automation, process optimization, and AI-powered decision support.
                    </p>
                    <ul>
                      <li>Process automation & optimization</li>
                      <li>Predictive analytics implementation</li>
                      <li>Performance monitoring & optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card shadow-lg rounded-lg animate-on-scroll" data-animation="fade-in-right" data-stagger="3">
                  <div className="card__header">
                    <h3>🎯 Innovation Acceleration</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      Accelerate product development and market innovation through 
                      cutting-edge AI technologies and strategic partnerships.
                    </p>
                    <ul>
                      <li>Product innovation strategy</li>
                      <li>AI-powered feature development</li>
                      <li>Market differentiation tactics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className={styles.featuredInsights}>
          <div className="container">
            <div className="row">
              <div className="col col--12 text--center">
                <h2 className="animate-on-scroll" data-animation="fade-in-up">Latest AI Insights & Thought Leadership</h2>
                <p className="lead animate-on-scroll" data-animation="fade-in-up" data-stagger="1">
                  Stay ahead of the curve with expert analysis on AI trends, 
                  implementation strategies, and business transformation insights.
                </p>
              </div>
            </div>
            <div className="row" style={{gap: '2rem', justifyContent: 'center', marginTop: '2rem'}}>
              <div className="col col--4">
                <Link to="/blog/advanced-prompt-engineering-strategies" className={styles.insightCard}>
                  <div className="card shadow-lg rounded-lg animate-on-scroll" data-animation="slide-in-bottom" data-stagger="1">
                    <div className="card__image">
                      <img src="/img/image-2.jpg" alt="Advanced AI Prompting" />
                    </div>
                    <div className="card__body">
                      <h4>Advanced Prompt Engineering</h4>
                      <p>Master the art of AI communication for maximum business impact</p>
                      <span className="tag">AI Strategy</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col col--4">
                <Link to="/blog/boolean-logic-post" className={styles.insightCard}>
                  <div className="card shadow-lg rounded-lg animate-on-scroll" data-animation="slide-in-bottom" data-stagger="2">
                    <div className="card__image">
                      <img src="/img/image.jpg" alt="AI Foundations" />
                    </div>
                    <div className="card__body">
                      <h4>AI Foundations & Business Logic</h4>
                      <p>Understanding the core principles that drive AI business applications</p>
                      <span className="tag">AI Fundamentals</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col col--4">
                <Link to="/patents" className={styles.insightCard}>
                  <div className="card shadow-lg rounded-lg animate-on-scroll" data-animation="slide-in-bottom" data-stagger="3">
                    <div className="card__image">
                      <img src="/img/image-3.jpg" alt="Innovation Portfolio" />
                    </div>
                    <div className="card__body">
                      <h4>Innovation Portfolio</h4>
                      <p>Explore patented technologies and breakthrough innovations</p>
                      <span className="tag">Innovation</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2 className="animate-on-scroll" data-animation="fade-in-up">Ready to Transform Your Business with AI?</h2>
                <p className="lead animate-on-scroll" data-animation="fade-in-up" data-stagger="1">
                  Let's discuss how strategic AI implementation can drive measurable 
                  results for your organization.
                </p>
                <div className={`${styles.ctaButtons} animate-on-scroll`} data-animation="fade-in-up" data-stagger="2">
                  <Link
                    className="button button--primary button--lg"
                    to="/contact">
                    Schedule a Consultation
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    to="/blog">
                    Explore More Insights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
