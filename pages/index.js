import Head from 'next/head'
import styles from '../styles/sass/pages/Home.module.scss'
import Hero from '../components/layout/hero'
import Services from '../components/layout/services'
import AboutUs from '../components/layout/aboutUs'
import Products from '../components/layout/products'
export default function Home() {

  return (
    <div>
      <Head>
        <title>Garai Pince</title>
        <meta name="description" content="Garai pincészet lorem ipsum ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.sectionHero}>
          <Hero />
        </section>
        <section className={styles.sectionServices}>
          <Services />
        </section>
        <section className={styles.sectionAboutUs}>
          <AboutUs />
        </section>
        <section className={styles.sectionProducts}>
          <Products />
        </section>
      </main>
    </div>
  )
}
