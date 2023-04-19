import React from "react"
import ReactPlayer from "react-player"


export default function Rise () {
    return (
        <>
            <h2>
                    RISE - 
                    <a href="https://github.com/MackieJG/RiseBudgetReact">GitHub</a>
                </h2>
            <main>
              <h2>TypeScript | React | Java </h2>
              <p>
                RISE is a budgeting app and educational tool created by a team of three developers as their final project before graduating from CodeClan. 
                 They aimed to challenge themselves by using TypeScript, a new technology for them, and built the app's backend using Java and Spring with a PostgreSQL database.
                 The app is designed to assist young adults with budget tracking and financial education, promoting responsible money management.
              </p>
              <ReactPlayer
              width="600px"
              height="600px"
              url="https://www.youtube.com/watch?v=QDKnOq5sEZI"
              />
            </main>
        </>
    )
}