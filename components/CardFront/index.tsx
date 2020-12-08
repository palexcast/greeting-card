import React from 'react';
import styles from './CardFront.module.scss';

export default function CardFront(): JSX.Element {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundContainer}>
                    <img className={styles.background}
                         src="https://image.freepik.com/free-photo/brown-crumpled-paper-texture-background_64749-1335.jpg"
                    />
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.text}>Welcome to</span>
                    <span className={styles.text}>DC Bergen's</span>
                    <span className={styles.text}>Christmas Gathering</span>
                </div>
            </div>
        </>
    );
}
