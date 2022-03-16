import Link from 'next/link'

import styles from '../styles/sass/components/Nav.module.scss'

export default function Nav() {
    return (
        <nav className={styles.mainNav}>
            <ul className={styles.mainNavList}>
                <li className={styles.mainNavListItem}><Link href="">KEZDŐLAP</Link></li>
                <li className={styles.mainNavListItem}><Link href="">BORAINK</Link></li>
                <li className={styles.mainNavListItem}><Link href="">KAPCSOLAT</Link></li>
                <li className={styles.mainNavListItem}><Link href="">BLOG</Link></li>
                <li className={styles.mainNavListItem}>RÓLUNK<ion-icon name="chevron-down-outline"></ion-icon></li>
            </ul>
        </nav>
    )
}