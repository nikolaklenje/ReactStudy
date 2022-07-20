import React from "react"

export default function(props){return(
  <div>
    <div>
    {props.Setup && <h1>Setup: {props.setup}</h1>}
    <h2>{props.Punchline}</h2>
    </div>
    </div>
)}