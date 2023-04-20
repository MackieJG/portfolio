import React from "react"
import styles from "../styles/projects.module.css"
import Nav from "../components/Nav.js"
import ReactPlayer from "react-player"
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
                        RISE is a budgeting app and educational tool created by a team of three developers as our final project before graduating from CodeClan. 
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
                        The project aims to assist future students of CodeClan by helping them balance their work and personal life during the course. 
                        We built the app in JavaScript using the React and MongoDB.
                        The purpose of the app is to enable CodeClan students to record their daily thoughts and feelings about the course and their personal life, 
                        as well as fill in a daily questionnaire about their sleep quality and eating habits. By comparing their feelings with their habits, 
                        students can gain insights into the relationship between the two.
                        By analyzing these daily records over time, students can identify how their daily choices and habits affect their overall well-being and work-life balance. 
                        This knowledge can help students make better choices to improve their overall physical and mental health and achieve a more balanced life during the course.
                    </p>
                </div>
            </div>
            <div className={styles.projectContainer}>
            <h2>
                Coffee Inventory Management - 
                <a href="https://github.com/MackieJG/CoffeeInventoryManagement"> GitHub</a>
            </h2>
            <main>
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
            </main>
            </div>
            </div>
        </>
    )
}