import React from "react";
import styles from "../styles/profile.module.css";
import Nav from "../components/Nav.js";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Profile() {
  return (
    <>
      <Nav />
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <p>
              Hey there! I'm Josh, a recent graduate of the software development
              course with CodeClan.<br></br>
              <br></br>
              Before getting into tech, I've spent quite some time managing
              coffee shops and roasteries in Canada, Australia, and Scotland.
              <br></br>
              I'm really passionate about the coffee community and have built
              some awesome relationships with professionals from all over the
              world. Plus, I've worked hard on developing my sensory skills
              which is essential for thriving in this industry.<br></br>
              <br></br>
              Apart from coffee, another interest close to my heart - helping
              disadvantaged youths with financial education, as someone who
              lacked the necessary education when I was younger I feel a desire
              to help build software that support the next generation in this
              field!<br></br>
              <br></br>I am a die hard Tartan Army Member. I attend as many
              Scotland football games as I possibly can and it has brought me
              some of the greatest joys over the last 15 years attending games
              fairly regularly. I plan on flying to North America for the World
              Cup 2026 if Scotland Qualify!
            </p>
          </div>
          <div className={styles.profileImage}>
            <Image
              src="/profileImage.jpg"
              alt="Profile Picture"
              width="250"
              height="250"
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <div className={styles.profileContainer}>
          <div className={styles.socialIconsContainer}>
            <div className={styles.linkedIn}>
              <SocialIcon url="https://www.linkedin.com/in/mackiejg/" />
            </div>
            <div className={styles.gitHub}>
              <SocialIcon url="https://github.com/MackieJG" bgColor="white" />
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
  );
}
