import Link from 'next/link'
import Image from 'next/image'
import Popup from '../popup'
import Nav from '../nav'
import MobileMenu from '../mobileMenu'
import styles from '../../styles/sass/layout/Header.module.scss'
import { useState } from 'react'
import useWindowSize from '../util/useWindowSize'

export default function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const size = useWindowSize();

    return (
        <>
            <header className={styles.header}>
                <span className={styles.logoContainer}>
                    <Link href="/">
                        <>
                            <Image
                                src="/img/garai-logo.png"
                                alt="Garai Pince logo"
                                width={20}
                                height={30}
                            />
                            <span className={styles.logoText}>
                                GARAI PINCE
                            </span>
                        </>
                    </Link>
                </span>
                {size.width >= 1200 && <Nav />}
                <span className={styles.cartIconContainer} onClick={() => setShowPopup(true)}>
                    <ion-icon name="bag-outline"></ion-icon>
                </span>
                {size.width < 1200 &&
                    <>
                        <div className={styles.mobileMenuBtnContainer}>
                            <div className={`${styles.menuBtn} ${showMobileMenu ? styles.open : ''}`} onClick={() => showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true)}>
                                <div className={styles.menuBtnBurger}></div>
                            </div>
                        </div>
                        <MobileMenu show={showMobileMenu}></MobileMenu>
                    </>
                }
            </header>
            <Popup show={showPopup} setShowPopup={setShowPopup}>
                <div className="content">

                </div>
            </Popup>
        </>
    );
}