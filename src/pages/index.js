import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "../styles/welcome.module.css";
import Nav from "../components/Nav.js";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const [videoId, setVideoId] = useState(null);

  const handleCoffeeProjectClick = () => {
    setVideoId("nWTkNJm1lsY");
  };

  const handleSelfProjectClick = () => {
    setVideoId("e27rc_Zbops");
  };
  const handleRiseProjectClick = () => {
    setVideoId("QDKnOq5sEZI");
  };

  return (
    <>
      <Nav />
      <div className={styles.pageWrapper}>
        <div className={styles.profile}>
          <p>
            Hi, I'm Joshua Mackie, Software Developer. Welcome to my Portfolio!
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.aboutMe}>
            {videoId ? (
              <ReactPlayer
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${videoId}`}
                playing={Boolean("true")}
              />
            ) : (
              <p className={styles.projectPreview}>Project Previews</p>
            )}
          </div>

          <div className={styles.linkMe}>
            <button
              className={styles.button}
              onClick={handleCoffeeProjectClick}>
              CIM
            </button>
            <button className={styles.button} onClick={handleSelfProjectClick}>
              .Self
            </button>
            <button className={styles.button} onClick={handleRiseProjectClick}>
              Rise
            </button>
          </div>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <div className={styles.linkedIn}>
          <SocialIcon url="https://www.linkedin.com/in/mackiejg/" />
        </div>
        <div className={styles.gitHub}>
          <SocialIcon url="https://github.com/MackieJG" bgColor="black" />
        </div>
      </div>
    </>
  );
}
