import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/sass/components/Nav.module.scss'

export default function Nav() {

    const [aboutUsSubMenuOpen, setAboutUsSubMenuOpen] = useState(false);

    return (
        <nav className={styles.mainNav}>
            <ul className={styles.mainNavList}>
                <li className={styles.mainNavListItem}><Link href="">KEZDŐLAP</Link></li>
                <li className={styles.mainNavListItem}><Link href="">BORAINK</Link></li>
                <li className={styles.mainNavListItem}><Link href="">KAPCSOLAT</Link></li>
                <li className={styles.mainNavListItem}><Link href="">BLOG</Link></li>
                <li className={`${styles.mainNavListItem} ${aboutUsSubMenuOpen ? styles.mainNavListItemActive : ''}`}
                    onClick={() => aboutUsSubMenuOpen ? setAboutUsSubMenuOpen(false) : setAboutUsSubMenuOpen(true)}
                >
                    <span>
                        RÓLUNK
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </span>
                    <div className={`${styles.subMenu} ${aboutUsSubMenuOpen ? styles.open : ''}`}>
                        RolunkSub
                    </div>
                </li>
                <li className={styles.mainNavListItem}><Link href="">DUMMY</Link></li>
            </ul>

        </nav>
    )
}