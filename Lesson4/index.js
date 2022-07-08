import React from "react"
import ReactDOM from "react-dom"


const navbar = (
    <nav>
        <h1>This is Header</h1>
        <ul>
            <li>Menu</li>
            <li>Price</li>
            <li>About</li>
        </ul>
   </nav>

)
ReactDOM.render(navbar, document.getElementById("root"))