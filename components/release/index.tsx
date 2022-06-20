import Card from '../cards';
import release1 from '../../public/release1.png';
import release2 from '../../public/release2.png';
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import styles from './release.module.scss'

const Release = () => {

   return (
       <div className={styles.releases}>
           <div className={`${styles.release} ${styles.orange}`}>
               <div className={styles.content}>
                   <h2 className={styles.title}>Initial Release 4/11</h2>
                   <p className={styles.description}>
                       We have released four limited edition NFTs early which can be bid on
                       via <a href="#">OpenSea</a>
                   </p>
                   <p className={styles.description}>
                       There will be the only four of these NFTs we ever make, so be sure
                       not to miss out!
                   </p>
                   <p className={styles.description}>50% of proceeds go to charity.</p>
                   <a href="#" className={styles.link}>
                       Check them out <BsArrowRight />
                   </a>
               </div>
               <div className={styles.image}>
                   <Image src={release1} alt="release" />
                   <div className={`${styles.ellipse} ${styles.pink}`}>wuf</div>
               </div>
           </div>
           <div className={`${styles.release} ${styles.green}`}>
               <div className={styles.cardContainer}>
                   <Card
                       image={release2}
                       series="Gloop Series"
                       title="Purple Man"
                       price={3.95}
                       tag={1084}
                       time={2}
                   />
                   <div className={`${styles.ellipse} ${styles.orange}`}>as</div>
               </div>
               <div className={styles.content}>
                   <h2 className={styles.title}>Initial Release 4/11</h2>
                   <p className={styles.description}>
                       We have released four limited edition NFTs early which can be bid on
                       via <a href="#">OpenSea</a>
                   </p>
                   <p className={styles.description}>
                       There will be the only four of these NFTs we ever make, so be sure
                       not to miss out!
                   </p>
                   <p className={styles.description}>50% of proceeds go to charity.</p>
                   <a href="#" className="link">
                       Check them out <BsArrowRight />
                   </a>
               </div>
           </div>
       </div>
   )
}

export default Release