import React from 'react';
import styles from './Countdown.module.scss';
import ReactCountdown from 'react-countdown';


function Completed(): JSX.Element {
    const christmasDate = new Date(2020, 11, 23, 12, 0, 0);

    return (
        <>
            <ReactCountdown date={christmasDate} intervalDelay={1000} renderer={({completed}) => {
                return completed ?
                    <span className={styles.countdownComplete}>Currently enjoying christmas with our families and dear ones 🎄<br/> Merry Christmas! ⭐️</span> :
                    <span className={styles.countdownComplete}>Currently having a good time with our dear colleagues 🎄</span>;
            }}
                />
                </>
                )
            }

function StillCounting({days, hours, minutes, seconds}): JSX.Element {
    return (
        <>
            <span className={styles.countdown}>
                {days > 0 && <span className={styles.countdownNumber}>{days}d</span>}
                {(days > 0 || hours > 0) && <span className={styles.countdownNumber}>{hours}h</span>}
                {(days > 0 || hours > 0 || minutes > 0) && <span className={styles.countdownNumber}>{minutes}m</span>}
                {(days > 0 || hours > 0 || minutes > 0 || seconds > 0) &&
                <span className={styles.countdownNumber}>{seconds}s</span>}
            </span>
        </>
    )
}

export default function Countdown(): JSX.Element {
    const date = new Date(2020, 11, 17, 19, 0, 0);

    return (
        <>
            <ReactCountdown date={date} intervalDelay={1000} renderer={({days, hours, minutes, seconds, completed}) => {
                return completed ? Completed() : StillCounting({days, hours, minutes, seconds});
            }}
            />
        </>
    )
}
