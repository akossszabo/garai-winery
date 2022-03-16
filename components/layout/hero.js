import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/sass/layout/Hero.module.scss'

export default function Hero() {
    return (
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
                <div className={styles.btnPrimaryCnt}>
                    <Link href="/termekek">
                        <a className={styles.btnPrimary}>
                            TERMÉKEINK
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.heroImgBox}>
                <Image
                    src="/img/hero-wine.jpeg"
                    className={styles.heroImg}
                    width={1240}
                    height={768}
                    alt="Wines"
                />
            </div>
        </div>
    );
}