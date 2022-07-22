import React from "react"

export default function Joke(props){

  return(
  <div>
    
    {props.setup && <h1>Setup: {props.setup}</h1>}
    
    <h3>Punchline:{props.punchline}</h3>
  
    </div>
)}