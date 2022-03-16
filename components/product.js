import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/sass/components/Product.module.scss'

export default function Product({ product }) {
    return (
        { product } &&
        <div className={styles.product} key={product.id}>
            <Image
                src="/img/wine-1.jpeg"
                className={styles.heroImg}
                width={350}
                height={500}
                alt="Wines"
            />
            <p className={styles.paragraph}>
                {product.name}
            </p>
        </div>

    )
}