import React from "react"
import styles from "../styles/profile.module.css"
import Nav from "../components/Nav.js"
import Image from "next/image"
import {SocialIcon} from "react-social-icons"

export default function Profile() {

    return (
        <>
            < Nav />
            <div className={styles.pageWrapper}>
                <div className={styles.container}> 
                    <div className={styles.profile}>
                        <p>
                        Hi, I'm Joshua, a recent graduate of the software development course with CodeClan. 
                        I've worked in the coffee industry in Canada, Australia, and Edinburgh, managing cafes and roasteries. 
                        I have excellent communication skills and enjoy community-driven work. I'm looking for opportunities 
                        to continue to grow and work with companies who share the same values. I'm particularly interested in supporting people from disadvantaged backgrounds with financial education.
                        </p>
                    </div>
                    <div className={styles.profileImage}>
                            <Image
                                src="/profileImage.jpg"
                                alt="Profile Picture"
                                width={250}
                                height={250}
                            />
                    </div>
                </div>
            </div>
            <div className={styles.pageWrapper}>
                <div className={styles.profileContainer}>
                    <div className={styles.socialIconsContainer}>
                    <div className={styles.linkedIn}>
                        <SocialIcon url="https://www.linkedin.com/in/mackiejg/"/>
                    </div>
                    <div className={styles.gitHub}>
                        <SocialIcon url="https://github.com/MackieJG"
                            bgColor="white"
                        />
                    </div>
                    </div>
                    <div className={styles.resume}>
                        <a href={"/MackieCV.pdf"} download>
                            <button className={styles.button}>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}