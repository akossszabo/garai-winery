import Head from 'next/head'
import styles from '../styles/sass/pages/Home.module.scss'
import Hero from '../components/layout/hero'
import Services from '../components/layout/services'
import AboutUs from '../components/layout/aboutUs'
import Products from '../components/layout/products'
import Articles from '../components/layout/articles'
export default function Home() {

  return (
    <>
      <Head>
        <title>Garai Pince</title>
        <meta name="description" content="Garai pincészet lorem ipsum ..." />
      </Head>
      <section className={styles.sectionHero}>
        {<Hero />}
      </section>
      {<section className={styles.sectionServices}>
        <Services />
      </section>}
      <section className={styles.sectionAboutUs}>
        <AboutUs />
      </section>
      <section className={styles.sectionProducts}>
        {<Products />}
      </section>
      <section className={styles.sectionArticles}>
        <Articles />
      </section>
    </>
  )
}
