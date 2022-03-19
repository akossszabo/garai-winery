import Link from 'next/link'
import Image from 'next/image'
import Popup from '../popup'
import Nav from '../nav'
import styles from '../../styles/sass/layout/Header.module.scss'
import { useState, useEffect } from 'react'

export default function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const [mobilMenuClass, setMobilMenuClass] = useState('');

    const [width, setWidth] = useState(0);
    const updateWidth = () => setWidth(window.innerWidth);
    useEffect(() => (window.onresize = updateWidth), []);

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
                {width >= 1200 && <Nav />}
                <span className={styles.cartIconContainer} onClick={() => setShowPopup(true)}>
                    <ion-icon name="bag-outline"></ion-icon>
                </span>
                {width < 1200 &&
                    <>
                        <div className={styles.mobileMenuBtnContainer}>
                            <div class={[styles.menuBtn, mobilMenuClass].join(' ')} onClick={() => mobilMenuClass ? setMobilMenuClass('') : setMobilMenuClass(styles.open)}>
                                <div class={styles.menuBtnBurger}></div>
                            </div>
                        </div>
                        <div className={[styles.mobileMenu, mobilMenuClass].join(' ')}>
                            <Nav />
                        </div>
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