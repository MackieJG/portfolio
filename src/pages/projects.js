import React from "react"
import styles from "../styles/projects.module.css"
import Nav from "../components/Nav.js"
import ReactPlayer from "react-player"
import Head from "next/head"

export default function Projects() {

    return (
        <>
    
            <Nav />
                <div className={styles.pageWrapper}>
                    <div className={styles.profileContainer}>
                        <h2>Joshua Mackie</h2>
                        <a href="https://github.com/MackieJG">GitHub</a>
                    </div>
                    <div className={styles.title}>
                        <h1>Projects</h1>
                    </div>
                    <div className={styles.projectContainer}>
                        <h2>
                            RISE -
                            <a href="https://github.com/MackieJG/RiseBudgetReact"> GitHub</a>
                        </h2>
                        <h2>TypeScript | React | Java </h2>
                    <div className={styles.videoContainer}>
                        <ReactPlayer
                        width="400px"
                        height="400px"
                        url="https://www.youtube.com/watch?v=QDKnOq5sEZI"
                        />
                        <p>
                            RISE is a budgeting app and educational tool created by a team of three developers as our final project before graduating from CodeClan.<br></br><br></br>
                            We aimed to challenge themselves by using TypeScript, a new language not taught on the course but something we identified as widely used in the industry, and built the app's backend using Java and Spring with a PostgreSQL database.
                            The app is designed to assist young adults with budget tracking and financial education, promoting responsible money management.
                        </p>
                        </div>
                    </div>
                    <div className={styles.projectContainer}>
                        <h2>
                            .Self - 
                            <a href="https://github.com/MackieJG/codeclanJournalApp"> GitHub</a>
                        </h2>
                        <h2>JavaScript | React | MongoDB </h2>
                    <div className={styles.videoContainer}>
                        <ReactPlayer
                        width="400px"
                        height="400px"
                        url="https://www.youtube.com/watch?v=e27rc_Zbops"
                        />
                        <p>
                        .Self was a group project built with JavaScript and MongoDB. designed to help CodeClan students balance their work and personal life during the course.<br></br> 
                        It allows them to record their daily thoughts, feelings, and habits, and gain insights into how their choices and habits affect their well-being and work-life balance.
                        It provides graphical analysis of your progress in the course based on your inputs in a clean concise manner.
                         The goal is to help students make better choices to improve their physical and mental health and achieve a more balanced life during the course.
                        </p>
                    </div>
                </div>
                <div className={styles.projectContainer}>
                <h2>
                    Coffee Inventory Management - 
                    <a href="https://github.com/MackieJG/CoffeeInventoryManagement"> GitHub</a>
                </h2>
                <h2>Python | Flask | PostgreSQL | HTML | CSS</h2>
                <div className={styles.videoContainer}>
                        <ReactPlayer
                        width="400px"
                        height="400px"
                        url="https://www.youtube.com/watch?v=nWTkNJm1lsY"
                        />
                    <p>
                        This app was developed for managing our coffee inventory and keeping track of our stock levels. 
                        The app also includes a dynamic markup calculation feature based on the price of the coffee.
                    </p>
                </div>
                </div>
                </div>
        </>
    )
}