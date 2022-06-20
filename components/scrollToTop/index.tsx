import React, {useEffect, useState} from 'react'
import { BsChevronUp } from "react-icons/bs";
import styles from './scrollToTop.module.scss'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
        });
    }, [])
    return (
        <div className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}>
            <a href="#">
                <BsChevronUp />
            </a>
        </div>
    );
}

export default ScrollToTop