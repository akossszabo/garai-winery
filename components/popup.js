import styles from '../styles/sass/components/Popup.module.scss'
import React, { useState } from "react";

export default function Popup(props) {
    return (
        <div className={`${styles.popup} ${props.show ? styles.popupShow : ''}`} id="popup">
            <div className={`${styles.popupContent} ${props.show ? styles.popupContentShow : ''}`} id="popupContent">
                <ion-icon name="close-outline" onClick={() => props.setShowPopup(false)}></ion-icon>
                {props.children}
            </div>
        </div>
    );
}