import React from "react"
import ReactPlayer from "react-player"


export default function Self () {
    return (
        <>
            <h2>
                    .Self - 
                    <a href="https://github.com/MackieJG/codeclanJournalApp">GitHub</a>
                </h2>
            <main>
              <h2>JavaScript | React | MongoDB </h2>
              <p>
              The project aims to assist future students of CodeClan by helping them balance their work and personal life during the course. 
              We built the app in JavaScript using the React and MongoDB.
              The purpose of the app is to enable CodeClan students to record their daily thoughts and feelings about the course and their personal life, 
              as well as fill in a daily questionnaire about their sleep quality and eating habits. By comparing their feelings with their habits, 
              students can gain insights into the relationship between the two.
              By analyzing these daily records over time, students can identify how their daily choices and habits affect their overall well-being and work-life balance. 
              This knowledge can help students make better choices to improve their overall physical and mental health and achieve a more balanced life during the course.
              </p>
              <ReactPlayer
              width="600px"
              height="600px"
              url="https://www.youtube.com/watch?v=e27rc_Zbops"
              />
            </main>
        </>
    )
}