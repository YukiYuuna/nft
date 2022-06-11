import React, {FC} from 'react';
import superEth from '../../public/supereth.png';
import Image from 'next/image';
import styles from './cards.module.scss'

interface Props {
    image: any,
    series: any,
    title: string,
    price: number,
    tag: number,
    time: any
}

const Card:FC<Props> = ( { image, series, title, price, tag, time } ) => {

    return (
        <div className={styles.card}>
            <div className="card-image">
                <Image src={image} alt="super1" width={240} height={200} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardHeading}>
                    <span className={styles.cardSeries}>{series}</span>
                    <span className={styles.cardTop}>Top bid</span>
                </div>
                <div className={styles.cardDetails}>
                    <h4 className="card-title">{title}</h4>
                    <div className={styles.cardPrice}>
                        <Image src={superEth} alt="super eth" />
                        <h4>{price} ETH</h4>
                    </div>
                </div>
                <div className={styles.cardSubDetails}>
                    <span>#{tag}</span>
                    <span>{time} day left</span>
                </div>
            </div>
        </div>
    );
}

export default Card

