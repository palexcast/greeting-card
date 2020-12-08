import React from 'react';
import styles from './Background.module.scss';

export default function Background(): JSX.Element {

    const url = 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80';
    // const url = 'https://images.unsplash.com/photo-1602522946054-6f2be6b188bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80';

    // const url = 'https://images.unsplash.com/photo-1595588982209-5c45ceb4f350?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80';

    // const url = 'https://images.unsplash.com/photo-1545276248-812ab8cd7b0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80';

    // const url = 'https://images.unsplash.com/photo-1543789848-067ab85f0e93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80';

    return (
        <>
            <div className={styles.background}>
                <img className={styles.backgroundImage}
                     src={url} alt="" />
            </div>
        </>
    );
}
