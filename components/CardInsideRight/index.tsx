import React from 'react';
import styles from './CardInsideRight.module.scss';

export default function CardInsideRight(): JSX.Element {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundContainer}>
                    <img className={styles.background}
                         src="https://image.freepik.com/free-photo/brown-crumpled-paper-texture-background_64749-1335.jpg"
                    />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.textTopLeft}>
                        <span className={styles.text}>Thursday, 17th of Desember</span>
                        <span className={styles.text}>19:00 - 22:00+</span>
                    </div>
                    <span className={styles.text}>We would like to invite you to an evening filled with fun and laughter</span>
                    <span className={styles.text}></span>
                    <span className={styles.text}></span>
                </div>
            </div>
        </>
    );
}
