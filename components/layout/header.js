import Link from 'next/link'
import Image from 'next/image'
import Popup from '../popup'
import Nav from '../nav'
import styles from '../../styles/sass/layout/Header.module.scss'
import { useState } from 'react'

export default function Header() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
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
                {/* <Nav /> */}
                <span className={styles.cartIconContainer} onClick={() => setShowPopup(true)}>
                    <ion-icon name="bag-outline"></ion-icon>
                </span>
            </header>
            <Popup show={showPopup} setShowPopup={setShowPopup}>
                <div className="content">

                </div>
            </Popup>
        </>
    );
}