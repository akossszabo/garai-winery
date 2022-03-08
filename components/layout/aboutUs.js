import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/sass/layout/AboutUs.module.scss'

export default function AboutUs() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsComposition}>
                <div className={[styles.aboutUsCompositionImg, styles.aboutUsCompositionImgFront].join(' ')}>
                    <Image
                        src="/img/comp-1.jpeg"
                        alt="Garai Pince"
                        width="400"
                        height="250" />
                </div>
                <div className={[styles.aboutUsCompositionImg, styles.aboutUsCompositionImgBack].join(' ')}>
                    <Image
                        src="/img/comp-1.jpeg"
                        alt="Garai Pince"
                        width="400"
                        height="250" />
                </div>
            </div>
            <div className={styles.aboutUsDescription}>
                <div className={[styles.lineAccent].join(' ')}></div>
                <h2 className={styles.headingSecondary}>
                    Olvass a Garai pincéről
                </h2>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Praesentium eveniet quo quis amet cupiditate nobis consectetur ipsam excepturi eius id porro voluptas tenetur dolor voluptatem ea, quasi veritatis, architecto debitis!
                </p>
                <div className={styles.btnCnt}>
                    <Link href="/termekek">
                        <a className={styles.btnSecondary}>
                            RÓLUNK
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}