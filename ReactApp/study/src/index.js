import React from "react"
import ReactDOM from "react-dom"

const page = (
  <div>
    <img src="/logo192.png" alt="" width="40px"></img>
    <h1>Fun Facts About React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has over 100k stars on Github</li>
    <li>It is maintained by Facebook</li>
    <li>Powers thousands of enterprise aps, including mobile apps</li>
  </ul>

  </div>
)

ReactDOM.render(
  page,
  document.getElementById("root")
)
//ReactDOM.render(page, document.getElementById("root") )