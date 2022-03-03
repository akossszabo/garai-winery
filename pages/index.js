import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/sass/pages/Home.module.scss'

export default function Home() {

  const openPopup = () => {
    const popup = document.querySelector('#popup');
    popup.classList.toggle(styles["popupShow"]);
    const popupContent = document.querySelector('#popupContent');
    popupContent.classList.toggle(styles["popupContentShow"]);
  }

  const closePopup = () => {
    const popup = document.querySelector('#popup');
    popup.classList.remove(styles["popupShow"]);
    const popupContent = document.querySelector('#popupContent');
    popupContent.classList.remove(styles["popupContentShow"]);
  }

  return (
    <div>
      <Head>
        <title>Garai Pincészet</title>
        <meta name="description" content="Garai pincészet lorem ipsum ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>

        <span className={styles.logoContainer}>
          <Link href="/">
            <>
              <Image
                src="/img/garai-logo.png"
                alt="Garai Pince logo"
                width="20"
                height="30"
                priority
              />
              <span className={styles.logoText}>
                GARAI PINCE
              </span>
            </>
          </Link>
        </span>

        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li className={styles.mainNavListItem}><Link href="">KEZDŐLAP</Link></li>
            <li className={styles.mainNavListItem}><Link href="">BORAINK</Link></li>
            <li className={styles.mainNavListItem}><Link href="">KAPCSOLAT</Link></li>
            <li className={styles.mainNavListItem}><Link href="">BLOG</Link></li>
            <li className={styles.mainNavListItem}>RÓLUNK<ion-icon name="chevron-down-outline"></ion-icon></li>
          </ul>
        </nav>

        <span className={styles.cartIconContainer} onClick={openPopup}>
          <ion-icon name="bag-outline"></ion-icon>
        </span>
      </header>

      <main>
        <section className={styles.sectionHero}>
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <div className={[styles.lineAccent, styles.lineAccentLarge].join(' ')}></div>
              <h1 className={styles.headingPrimary}>
                GARAI PINCE
              </h1>
              <p className={styles.headingPrimarySub}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, sit!
                Fugit libero dolorum, cupiditate ullam odio itaque perspiciatis ut tempore est porro pariatur alias quibusdam beatae voluptas voluptate. Vero, nemo.
              </p>
              <div className={styles.heroBtnCnt}>
                <Link href="/termekek">
                  <a className={styles.heroBtn}>
                    TERMÉKEINK
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.heroImgBox}>
              <Image
                src="/img/hero-wine.jpeg"
                className={styles.heroImg}
                /* width={800}
                height={600} */
                sizes='70vw'
                layout="fill"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </div>

          </div>
        </section>
        <section className={styles.sectionServices}>
          <div className={['text-center', 'mb-32'].join(' ')}>
            <h2 className={styles.headingSecondary}>
              Fedezd fel élményeinket
            </h2>
          </div>
          <div className={styles.services}>
            <div className={styles.servicesItem}>
              CARD1
            </div>
            <div className={styles.servicesItem}>
              CARD2
            </div>
            <div className={styles.servicesItem}>
              CARD3
            </div>
            <div className={styles.servicesItem}>
              CARD4
            </div>
          </div>
        </section>
      </main>
      <div className={styles.popup} id="popup">
        <div className={styles.popupContent} id="popupContent">
          <ion-icon name="close-outline" onClick={closePopup}></ion-icon>
        </div>
      </div>
    </div>
  )
}
