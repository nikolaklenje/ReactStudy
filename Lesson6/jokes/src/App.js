import React from "react"
import './App.css';
import Joke from "./components/joke.js"

export default function App(){return(
<div>
<Joke 
Setup="I got my daughter a fridge for her birthday."
Punchline= "I can't wait to see her face light up when she opens it."
Upvotes={10}
Downvotes={20}
isPun={false}
/>
<Joke 
Setup="How did the hacker escape the police?"
Punchline= "He just ransomware!"
Upvotes={10}
Downvotes={20}
isPun={true}
/>
<Joke 
Setup="Why don't pirates travel on mountain roads?"
Punchline= " Scurvy"
Upvotes={10}
Downvotes={20}
isPun={true}
/>
<Joke 
Setup="What's the best thing about Switzerland?"
Punchline= "I don't know, but the flag is a big plus!"
Upvotes={10}
Downvotes={20}
isPun={false}
/>
<Joke 
Punchline= "It is hard to explain puns to kleptomaniacs because they always take things literally."
Upvotes={10}
Downvotes={20}
isPun={true}
/>
<Joke
/>
</div>

)}
