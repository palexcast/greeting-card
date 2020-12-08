import React from 'react';
import styles from './CardInsideRight.module.scss';

export default function CardInsideRight(): JSX.Element {

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
                    <div className={styles.textTop}>
                        <span className={styles.text}>Thursday, 17th of December</span>
                        <span className={styles.text}>19:00 - 22:00+</span>
                    </div>
                    <div className={styles.textMiddle}>
                        <span className={styles.text + ' ' + styles.larger}>We would like to invite you to this years digital Christmas Party.</span>
                        <span
                            className={styles.text + ' ' + styles.larger}>An evening filled with fun and laughter!</span>
                        <span className={styles.text}>Dresscode: Dress to impress!</span>
                        <span className={styles.text}>Please let us know if you are able to attend or not within Friday 11th of December by accepting the calendar invite.</span>
                        <span
                            className={styles.text}>The program and where to meet will soon be released here. Stay in touch!</span>

                        <span className={styles.importantText}>
                            <span className={styles.text}>PS: Wednesday 16th of December your leader will deliver a pleasant surprise to you.</span>
                            <span className={styles.text}>If you’re not home this evening, please let your leader know as soon as possible!</span>
                            <span className={styles.text}>Our wish is that you enjoy this surprise alongside your colleagues, the 17th. </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
