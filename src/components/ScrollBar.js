import React from "react"
import Image from "next/image"
import styles from "../styles/ScrollBar.module.css"

export default function ScrollBar () {
    return (
        <>
        <div className={styles.scrollBar}>
            <div className={styles.imageContainer}>
                <Image src="/HTMLImg.png" alt="HTML Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/CSSImg.png" alt="CSS Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/JavaImg.png" alt="Python Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/FlaskImg.png" alt="Flask Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/NodeImg.png" alt="Node Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/ReactImg.png" alt="React Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/TypeScriptImg.png" alt="TypeScript Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/PostgreSQLImg.png" alt="PostgreSQL Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/MongoDBImg.png" alt="MongoDB Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/GitHubImg.png" alt="GitHub Icon" width="40" height="40" className={styles.image}/>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/GitImg.png" alt="Git Icon" width="40" height="40" className={styles.image}/>
            </div>
        </div>
       
        </>
    )
}