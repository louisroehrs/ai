import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Strategic AI Consulting',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Comprehensive AI strategy development and implementation roadmaps 
        tailored to your business objectives. From technology assessment 
        to ROI analysis, we ensure measurable business impact.
      </>
    ),
  },
  {
    title: 'Enterprise Innovation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Accelerate your organization's digital transformation with 
        cutting-edge AI solutions. We help Fortune 500 companies and 
        high-growth startups stay ahead of the competition.
      </>
    ),
  },
  {
    title: 'Thought Leadership',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Stay informed with expert insights on AI trends, implementation 
        strategies, and business transformation. Our thought leadership 
        content keeps you ahead of the curve.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
