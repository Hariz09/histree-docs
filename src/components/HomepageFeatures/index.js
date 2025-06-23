import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sederhana dan Intuitif',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Interface yang mudah dipahami memungkinkan Anda membuat dan menjelajahi pohon keluarga dengan mudah, tanpa perlu keahlian teknis khusus.
      </>
    ),
  },
  {
    title: 'Keamanan Data Keluarga Anda Terjaga',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Data dan informasi pribadi keluarga Anda dilindungi dengan sistem keamanan berlapis dan enkripsi tingkat terpercaya.
      </>
    ),
  },
  {
    title: 'Terhubung dengan Keluarga',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Perkuat ikatan keluarga dengan berbagi cerita, foto kenangan, dan tetap terhubung dengan saudara di mana pun mereka berada.
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
