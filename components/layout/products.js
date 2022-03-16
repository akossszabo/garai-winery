import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from '../../styles/sass/layout/Products.module.scss'
import Product from '../product'

export default function Products() {
    const [activeTab, setActiveTab] = useState('all');
    const [products, setProducts] = useState(allProduct);
    const sliceVal = 6;
    useEffect(() => {
        const abortCont = new AbortController();
        console.log(activeTab);
        activeTab == 'all' ? setProducts(allProduct.slice(0,sliceVal)) : setProducts(allProduct.filter(p => p.type == activeTab).slice(0,sliceVal));
        return () => abortCont.abort();
    }, [activeTab]);

    return (
        <div className={styles.products}>
            <div className={styles.productsHeading}>
                <div className={[styles.lineAccent, styles.lineAccentLarge].join(' ')}></div>
                <h2 className={styles.headingSecondary}>
                    Válogass boraink közül
                </h2>
            </div>
            <div className={styles.productsNav}>
                <button className={[styles.productsNavItem, activeTab == 'all' ?  styles.productsNavItemUnderline : ''].join(' ')} onClick={() => setActiveTab('all')} >
                    ÖSSZES BOR
                </button>
                <button className={[styles.productsNavItem, { activeTab } == 'red' ? 'underline' : ''].join(' ')} onClick={() => setActiveTab('red')}>
                    <div className={[styles.productsNavItemDot, styles.productsNavItemDotRed].join(' ')}></div>
                    VÖRÖS
                </button>
                <button className={[styles.productsNavItem, { activeTab } == 'white' ? 'underline' : ''].join(' ')} onClick={() => setActiveTab('white')}>
                    <div className={[styles.productsNavItemDot, styles.productsNavItemDotWhite].join(' ')}></div>
                    FEHÉR
                </button>
                <button className={[styles.productsNavItem, { activeTab } == 'rose' ? 'underline' : ''].join(' ')} onClick={() => setActiveTab('rose')}>
                    <div className={[styles.productsNavItemDot, styles.productsNavItemDotRose].join(' ')}></div>
                    ROZÉ
                </button>
            </div>
            <div className={styles.productsGrid}>
                {products && products.map(product => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
            <div className={styles.btnCnt}>
                <Link href="/termekek">
                    <a className={[styles.btnSecondary, styles.btnSecondaryInverse].join(' ')}>
                        ÖSSZES BOR
                    </a>
                </Link>
            </div>
        </div >
    )
}

const allProduct = [
    { "id": 1, "name": "vörös1", "type": "red" },
    { "id": 2, "name": "fehér1", "type": "white" },
    { "id": 3, "name": "vörös2", "type": "red" },
    { "id": 4, "name": "roze1", "type": "rose" },
    { "id": 5, "name": "feher2", "type": "white" },
    { "id": 6, "name": "feher3", "type": "white" },
    { "id": 7, "name": "vörös3", "type": "red" },
    { "id": 8, "name": "vörös4", "type": "red" },
    { "id": 9, "name": "vörös5", "type": "red" },
    { "id": 10, "name": "roze2", "type": "rose" },
    { "id": 11, "name": "vörös6", "type": "red" },
    { "id": 12, "name": "vörös7", "type": "red" }
];