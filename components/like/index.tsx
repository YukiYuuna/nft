import eth1 from '../../public/eth1.png';
import eth2 from '../../public/eth2.png';
import Image from 'next/image'
import styles from './like.module.scss';

const Like = () => {

    return (
        <div className={styles.like}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className="image">
                        <Image src={eth1} alt="eth1" />
                    </div>
                    <h2 className={styles.title}>An NFT like no other</h2>
                    <p className={styles.description}>
                        Don't miss out on the release of our new NFT. Sign up below to
                        recieve updates when we go live on 11/22.
                    </p>
                    <p className={styles.description}>
                        Don't miss out on the release of our new NFT. Sign up below to
                        recieve updates when we go live on 11/22. Don't miss out on the
                        release of our new NFT.
                    </p>
                </div>
                <div className={styles.content}>
                    <div className="image">
                        <Image src={eth2} alt="eth2" />
                    </div>
                    <h2 className={styles.title}>An NFT like no other</h2>
                    <p className={styles.description}>
                        Don't miss out on the release of our new NFT. Sign up below to
                        recieve updates when we go live on 11/22.
                    </p>
                    <p className={styles.description}>
                        Don't miss out on the release of our new NFT. Sign up below to
                        recieve updates when we go live on 11/22. Don't miss out on the
                        release of our new NFT.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Like