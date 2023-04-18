import Link from "next/link"
import styles from "../styles/Nav.module.css"
export default function Nav () {

    return (
        <>
            <div className={styles.container}>
                <Link href="/projects">Projects</Link>
                <Link href="/profile">About Me</Link>
            </div>
        </>
    )
};