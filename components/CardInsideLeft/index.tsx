import React from 'react';
import styles from './CardInsideLeft.module.scss';
import Countdown from "../Countdown";

export default function CardInsideLeft(): JSX.Element {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundContainer}>
                    <img className={styles.background}
                         src="https://image.freepik.com/free-photo/brown-crumpled-paper-texture-background_64749-1335.jpg"
                         alt=""
                    />
                </div>
                <div className={styles.textContainer}>
                    <Countdown/>
                </div>
            </div>
        </>
    );
}
