import type { NextPage } from "next";
import styles from "./home.module.scss";
import Map from "../components/parkourMap";

const Home: NextPage = () => {
    return (
        <div className={styles.mapContainer}>
            <div className={styles.map}>
                <Map/>
            </div>
        </div>
    );
};

export default Home;
