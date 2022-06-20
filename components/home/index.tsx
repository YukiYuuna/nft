import React from "react";
import home from "../../public/home.png";
import Image from 'next/image';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.subtitle}>Launching Soon</p>
                    <h1 className={styles.title}>An NFT like no other</h1>
                    <p className={styles.description}>
                        Don't miss out on the release of our new NFT. Sign up below to
                        recieve updates when we go live.
                    </p>
                    <button className={styles.button}>Sign Up</button>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image src={home} alt="home image" />
                    </div>
                        <div className={`${styles.ellipse} ${styles.pink}`}></div>
                        <div className={`${styles.ellipse}  ${styles.orange}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Home