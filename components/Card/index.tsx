import React from 'react';
import styles from './Card.module.scss';
import CardInsideLeft from "../CardInsideLeft";
import CardInsideRight from "../CardInsideRight";
import CardFront from "../CardFront";


interface Props {
    flipped: boolean,
}

export default function Card({flipped}: Props): JSX.Element {

    const flipContainerStyle = `${styles.flipContainer} ${flipped ? styles.active : ''}`

    const cardFace = (face) => `${styles.cardFace} ${face}`

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={flipContainerStyle}>
                    <div className={styles.flipper}>
                        <div className={cardFace(styles.front)}>
                            <CardFront/>
                        </div>
                        <div className={cardFace(styles.insideLeft)}>
                            <CardInsideLeft/>
                        </div>
                    </div>
                    <div className={cardFace(styles.insideRight)}>
                        <CardInsideRight/>
                    </div>
                </div>
            </div>
        </>
    );
}
