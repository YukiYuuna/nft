import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import logo from '../../public/logo.png';
import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = () => {
    const links = [
        {
            title: "About",
            data: ["About", "Terms", "Legal"],
        },
        {
            title: "NFT",
            data: ["OpenSea", "Maker", "Learn"],
        },
        {
            title: "Contact",
            data: ["Press", "Support"],
        },
        {
            title: "Social",
            data: ["Twitter", "Instagram"],
        },
    ];

    const socialLink = [
        <BsFacebook />,
        <BsTwitter />,
        <BsInstagram />,
        <FaTiktok />,
    ];

    return (
        <>
            <div className={styles.upper}>
                <div className={styles.brandContainer}>
                    <div className={styles.brand}>
                        <Image src={logo} alt="logo" />
                    </div>
                    <p>Exclusive NFT Collection</p>
                    <ul>
                        {socialLink.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.links}>
                    {links.map(({ title, data }, index) => {
                        return (
                            <div className={styles.link} key={index}>
                                <h4>{title}</h4>
                                <ul>
                                    {data.map((link, index2) => (
                                        <li key={index2}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.lower}>
                <span>&copy; Copyright 2022 NFT</span>
                <span>Launching August 2022</span>
            </div>
        </>
    )
}

export default Footer