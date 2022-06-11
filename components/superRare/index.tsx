import Card from "../cards";
import super1 from '../../public/super1.png'
import super2 from '../../public/super2.png'
import super3 from '../../public/super3.png'
import super4 from '../../public/super4.png'
import styles from './superRare.module.scss'

const SuperRare = () => {

    const data = [
        {
            image: super1,
            series: "Gloop Series",
            title: "Purple Man",
            price: 2.99,
            tag: 12983,
            time: 1,
        },
        {
            image: super2,
            series: "Gloop Series",
            title: "Beige",
            price: 2.99,
            tag: 12983,
            time: 1,
        },
        {
            image: super3,
            series: "Gloop Series",
            title: "Red Man",
            price: 2.99,
            tag: 12983,
            time: 1,
        },
        {
            image: super4,
            series: "Gloop Series",
            title: "Green",
            price: 2.99,
            tag: 12983,
            time: 1,
        },
    ];
    return (
        <div className={styles.superRare}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>LE Super Rare Auction</h2>
                <p className={styles.description}>
                    We have released four limited edition NFT's early which which can be
                    bid on via <a href="#">OpenSea</a>.
                </p>
            </div>
            <div className={styles.cards}>
                {data.map(({ image, series, title, price, tag, time }, index) => (
                    <Card
                        image={image}
                        series={series}
                        title={title}
                        price={price}
                        tag={tag}
                        time={time}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default SuperRare