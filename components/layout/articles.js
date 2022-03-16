import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from '../../styles/sass/layout/Articles.module.scss'

export default function Articles() {
    return (
        <div className={styles.articles}>
            <div className={styles.articlesHeading}>
                <div className={[styles.lineAccent, styles.lineAccentLarge].join(' ')}></div>
                <h2 className={styles.headingSecondary}>
                    Legfrissebb cikkeink
                </h2>
            </div>

        </div>
    )

}