import React from "react"
import styles from "../styles/projects.module.css"
import Nav from "../components/Nav.js"
import Rise from "../components/Rise.js"
import Self from "../components/Self.js"
import CIM from "../components/CIM.js"

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
                <div className={styles.riseContainer}>
                    <Rise />
                </div>
                <div className={styles.selfContainer}>
                    <Self />
                </div>
                <div className={styles.cimContainer}>
                    <CIM />
                </div>
            </div>
        </>
    )
}