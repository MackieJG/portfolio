import React from "react"
import ReactPlayer from "react-player"


export default function CIM () {
    return (
        <>
            <h2>
                    Coffee Inventory Management - 
                    <a href="https://github.com/MackieJG/CoffeeInventoryManagement">GitHub</a>
                </h2>
            <main>
              <h2>Python | Flask | PostgreSQL | HTML | CSS</h2>
              <p>
              This app was developed for managing our coffee inventory and keeping track of our stock levels. 
              The app also includes a dynamic markup calculation feature based on the price of the coffee.
              </p>
              <ReactPlayer
              width="600px"
              height="600px"
              url="https://www.youtube.com/watch?v=nWTkNJm1lsY"
              />
            </main>
        </>
    )
}