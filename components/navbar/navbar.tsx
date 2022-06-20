import React, {FC, useState} from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import styles from './navbar.module.scss';
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

interface Props {
    changeTheme: any;
    currentTheme: string;
}

const Navbar:FC<Props> = ({changeTheme, currentTheme}) => {

    return (
        <nav className={styles.nav}>
            <div className={styles.brandContainer}>
                <div className={styles.brand}>
                    <Image src={logo} alt={"dog"}/>
                </div>
            </div>
            <div className={styles.toggleContainer}>
                <div className={"toggle"}>
                    <div className={"mode"}>
                    </div>
                </div>
                <div>
                    <ul className={styles.links}>
                        <li>
                            <a href={"#"}> Features </a>
                        </li>
                        <li>
                            <a href={"#"}> About </a>
                        </li>
                        <li>
                            <a href={"#"}> Launch </a>
                        </li>
                        <li>
                            <a href={"#"}> Sign up </a>
                        </li>
                        <li onClick={changeTheme}>
                            {currentTheme === "dark"
                                ? (<ImSun className={styles.light}/> )
                                : (<BsFillMoonFill className={styles.dark}/>)}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar