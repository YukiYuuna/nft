import React from 'react'
import client1 from '../../public/clients1.png'
import client2 from '../../public/clients2.png'
import client3 from '../../public/clients3.png'
import client4 from '../../public/clients4.png'
import client5 from '../../public/clients5.png'
import Image from 'next/image'
import styles from './clients.module.scss'

const Clients = () => {
const data = [client1, client2, client3, client4, client5];

    return (
        <div className={styles.clients}>
            <div className="container">
                <div className={styles.clientsContainer}>
                    {data.map((client, index) => (
                        <div className="client" key={index}>
                            <Image src={client} alt="client" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients