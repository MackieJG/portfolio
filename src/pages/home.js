import React, {useState} from "react"
import ReactPlayer from "react-player"
import Link from "next/link"
import styles from "../styles/welcome.module.css"
import Nav from "../components/Nav.js"

export default function Home() {

    const [videoId, setVideoId] = useState(null);

    const handleCoffeeProjectClick = () => {
        setVideoId("nWTkNJm1lsY")
    };

    const handleSelfProjectClick = () => {
        setVideoId("e27rc_Zbops")
    };
    const handleRiseProjectClick = () => {
        setVideoId("QDKnOq5sEZI")
    };

  
    return (
        <>
        < Nav />
            <div className={styles.pageWrapper}>
                <div className={styles.container}>
                    <div className={styles.aboutMe}>
                        { videoId ? (
                            <ReactPlayer
                                width="560"
                                height="600"
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                playing="true"
                            />
                        ) : (
                                <p>
                                    I am committed to delivering high quality code which meets the needs of the business. I’m looking for my
                                    first role in the industry, which will continue my growth as a developer. I am interested in the finance industry
                                    and in particular technologies which aim to help those from disadvantaged backgrounds.
                                </p>
                        )}
                
                    </div>
                
                    <div className={styles.linkMe}>
                        <button className={styles.button} onClick={handleCoffeeProjectClick}>Coffee Inventory Management</button>
                        <button className={styles.button} onClick={handleSelfProjectClick}>.Self</button>
                        <button className={styles.button} onClick={handleRiseProjectClick}>Rise</button>
                        <button className={styles.button}><Link href="/about">About</Link></button>
                    </div>
                </div>
            </div>

        </>
    )
}