import styles from '../styles/sass/components/MobileMenu.module.scss'
import React, { useState } from "react";
import Nav from './nav';

export default function MobileMenu(props) {
    return (
        <div className={`${styles.mobileMenu} ${props.show ? styles.open : ''}`}>
            <Nav />
        </div>
    );
}