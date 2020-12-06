import React from 'react';
import styles from './CardInsideRight.module.scss';

export default function CardInsideRight(): JSX.Element {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundContainer}>
                    <img className={styles.background}
                         src="https://images.unsplash.com/photo-1545608444-f045a6db6133?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3304&q=80"/>
                </div>
                <span className={styles.text}>Hello World</span>
            </div>
        </>
    );
}
