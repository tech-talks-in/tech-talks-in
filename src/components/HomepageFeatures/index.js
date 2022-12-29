import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introduction',
    Svg: require('@site/static/img/undraw_creative_team_re_85gn.svg').default,
    description: (
      <>
        Latest news, insights, and tips on technology, 
        dedicated to providing quality content that will help you up the game on the ongoing trends 
        and developments in evolving tech industry.
      </>
    ),
  },
  {
    title: 'Topics',
    Svg: require('@site/static/img/undraw_writer_q06d.svg').default,
    description: (
      <>
        We&apos;ll cover topics related to application development, devops, personal computers, IoT devices, 
        digital marketing, adtech &#38; martech, artificial intelligence, data analytics and more..
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This website is built with Docusaurus. 
        Feel free to email us on:<a href='mailto:hello@tech-talks.in'> hello@tech-talks.in</a> for any feedback, inputs 
        or suggestions for future topics.
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
        <h3>{title}</h3>
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
