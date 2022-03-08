import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/sass/layout/Services.module.scss'

export default function Services() {
    return (
        <>
            <div className={[styles.servicesHeading, 'mb-32'].join(' ')}>
                <div className={[styles.lineAccent, styles.lineAccentLarge].join(' ')}></div>
                <h2 className={styles.headingSecondary}>

                    Fedezd fel élményeinket
                </h2>
            </div>
            <div className={styles.services}>
                <div className={styles.servicesItem}>
                    <Image
                        src="/img/winery.jpeg"
                        alt="Garai Pince"
                        width="250"
                        height="150"

                    />
                    <h2 className={styles.headingTertiary}>
                        Szőlőbirtok túra
                    </h2>
                    <p className={styles.paragraph}>
                        Borkóstolóinkon a palackos tételek mellett lehetőség van a hordóban érlelődő és tartályokban készülő borok kóstolására is a borosgazda szakszerű, jó hangulatú körbevezetésével.
                    </p>
                    <div className={styles.lineAccent}></div>
                </div>
                <div className={styles.servicesItem}>
                    <Image
                        src="/img/wine-tasting.jpeg"
                        alt="Garai Pince logo"
                        width="250"
                        height="150"

                    />
                    <h2 className={styles.headingTertiary}>
                        Borkóstoló
                    </h2>
                    <p className={styles.paragraph}>
                        Borkóstolóinkon a palackos tételek mellett lehetőség van a hordóban érlelődő és tartályokban készülő borok kóstolására is a borosgazda szakszerű, jó hangulatú körbevezetésével.
                    </p>
                    <div className={styles.lineAccent}></div>
                </div>
                <div className={styles.servicesItem}>
                    <Image
                        src="/img/events.jpeg"
                        alt="Garai Pince logo"
                        width="250"
                        height="150"
                        className={styles.servicesItemImg}

                    />
                    <h2 className={styles.headingTertiary}>
                        Rendezvények
                    </h2>
                    <p className={styles.paragraph}>
                        Borkóstolóinkon a palackos tételek mellett lehetőség van a hordóban érlelődő és tartályokban készülő borok kóstolására is a borosgazda szakszerű, jó hangulatú körbevezetésével.
                    </p>
                    <div className={styles.lineAccent}></div>
                </div>
                <div className={styles.servicesItem}>
                    <Image
                        src="/img/guest-house.jpeg"
                        alt="Garai Pince logo"
                        width="250"
                        height="150"
                    />
                    <h2 className={styles.headingTertiary}>
                        Vendégház
                    </h2>
                    <p className={styles.paragraph}>
                        Borkóstolóinkon a palackos tételek mellett lehetőség van a hordóban érlelődő és tartályokban készülő borok kóstolására is a borosgazda szakszerű, jó hangulatú körbevezetésével.
                    </p>
                    <div className={styles.lineAccent}></div>
                </div>
            </div>
        </>
    )
}