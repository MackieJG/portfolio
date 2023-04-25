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
                            We aimed to challenge ourselves by using TypeScript, a new language not taught on the course but something we identified as widely used in the industry, and built the app's backend using Java and Spring with a PostgreSQL database.<br></br><br></br>
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
                        Self is a group project created using JavaScript and MongoDB. Its purpose is to assist CodeClan students in managing their work and personal life while studying.<br></br><br></br> 
                        The platform enables users to document their daily thoughts, emotions, and habits, which helps them understand how their choices and routines influence their overall well-being and work-life equilibrium.<br></br><br></br> The platform provides an easy-to-understand visual representation of your progress in the course, based on your recorded inputs.
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
                        My first app as part of CodeClan's course after 4 weeks working with Python.<br></br><br></br>
                        This app was developed for managing our coffee inventory and keeping track of our stock levels. 
                        The app also includes a dynamic markup calculation feature based on the buy and sell price of the coffee.<br></br><br></br>
                        I learned a lot about the importance of planning, design, time management and scope. 
                    </p>
                </div>
                </div>
                </div>
        </>
    )
}