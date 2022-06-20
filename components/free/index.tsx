import icon from "../../public/icon.png";
import Image from 'next/image';
import Card from "../cards";
import super1 from '../../public/super1.png'
import release2 from '../../public/release2.png'
import styles from './free.module.scss'

const Free = () => {

    return (
        <div className={styles.free}>
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={`${styles.ellipse} ${styles.pink}`}></div>
                    <div className={`${styles.ellipse} ${styles.green}`}></div>
                </div>
                <div className={styles.content}>
                    <div className="image">
                        <Image src={icon} alt="icon" />
                    </div>
                    <h2 className={styles.title}>Free NFT for early birds</h2>
                    <p className="description">
                        Sign up today and you'll get a free NFT when we launch
                    </p>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <Card
                        image={super1}
                        series="Gloop Series"
                        title="Purple Man"
                        price={2.99}
                        tag={12983}
                        time={1}
                    />
                </div>
                <div className={styles.card2}>
                    <Card
                        image={release2}
                        series="Toto"
                        title="Na toto kura"
                        price={99999}
                        tag={1094}
                        time={2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Free
