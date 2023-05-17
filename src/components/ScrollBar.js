import React from "react"
import Image from "next/image"
import styles from "../styles/ScrollBar.module.css"

export default function ScrollBar () {
    return (
        <>
        <div className={styles.scrollBar}>
            <div className={styles.imageContainer}>
                <Image src="/html5-original.svg" alt="HTML Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/css3-original.svg" alt="CSS Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/java-original.svg" alt="Python Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/flask-original.svg" alt="Flask Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/nextjs-original-wordmark.svg" alt="Nextjs Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/react-original.svg" alt="React Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/typescript-plain.svg" alt="TypeScript Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/postgresql-original.svg" alt="PostgreSQL Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/mongodb-original.svg" alt="MongoDB Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/github-original.svg" alt="GitHub Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/javascript-plain.svg" alt="JavaScript Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/python-original.svg" alt="Python Icon" width="40" height="40" className={styles.image}/>
            </div>
        </div>
       
        </>
    )
}