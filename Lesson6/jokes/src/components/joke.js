import React from "react"

export default function Joke(props){
  console.log(props.isPun)
  return(
  <div>
    
    {props.Setup && <h1>Setup: {props.Setup}</h1>}
    <h2>Punchline:{props.Punchline}</h2>
  
    </div>
)}