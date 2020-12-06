import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Card from "../components/Card";
import Background from "../components/Background";
import {useState} from "react";

export default function Home() {
    const openAfter = 2;
    const [toggled, setToggled] = useState(false);
    const [flipped, setFlipped] = useState(false);
    setTimeout(() => toggled ? void 0 : setFlipped(true), openAfter * 1000);
    return (
        <div className={styles.container}>
            <Head>
                <title>Juleavslutning 2020</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.background}>
                    <Background/>
                </div>
                <div className={styles.cardContainer}>
                    <Card flipped={flipped}/>
                </div>
                <button type="button" className={styles.toggleButton} onClick={() => {
                    setFlipped(!flipped);
                    setToggled(true);
                }}>{flipped ? 'Close' : 'Open'}</button>
            </main>
        </div>
    )
}
