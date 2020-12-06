import React from 'react';
import styles from './CardInsideLeft.module.scss';

export default function CardInsideLeft(): JSX.Element {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundContainer}>
                    <img className={styles.background}
                         src="https://images.unsplash.com/photo-1512389098783-66b81f86e199?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2288&q=80"/>
                </div>
                <span className={styles.text}>Hello World</span>
            </div>
        </>
    );
}
