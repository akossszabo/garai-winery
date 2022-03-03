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
              <h1 className={styles.heroTitle}>
                GARAI PINCE
              </h1>
              <p className={styles.heroDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, sit!
                Fugit libero dolorum, cupiditate ullam odio itaque perspiciatis ut tempore est porro pariatur alias quibusdam beatae voluptas voluptate. Vero, nemo.
              </p>
              <button className={styles.heroBtn}>
                GOMB
              </button>
            </div>
            <div className={styles.heroImgBox}>
              <Image
                src="/img/hero-wine.jpeg"
                className={styles.heroImg}
                width={800}
                height={600}
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </div>

          </div>
          {/* <div class="hero">
            <div class="hero-text-box">
              <h1 class="heading-primary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p class="hero-description">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <a href="#" class="btn btn--full margin-right-sm"
              >Start eating well</a
              >
              <a href="#" class="btn btn--outline">Learn more &darr;</a>
              <div class="delivered-meals">
                <div class="delivered-imgs">
                  <img src="img/customers/customer-1.jpg" alt="Customer photo" />
                  <img src="img/customers/customer-2.jpg" alt="Customer photo" />
                  <img src="img/customers/customer-3.jpg" alt="Customer photo" />
                  <img src="img/customers/customer-4.jpg" alt="Customer photo" />
                  <img src="img/customers/customer-5.jpg" alt="Customer photo" />
                  <img src="img/customers/customer-6.jpg" alt="Customer photo" />
                </div>
                <p class="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div class="hero-img-box">
              <img
                src="img/hero.png"
                class="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </div>
          </div> */}
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
