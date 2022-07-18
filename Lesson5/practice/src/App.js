
import './App.css';

function App() {
  const date= new Date()
  const hours = date.getHours()
  let timeofDay

  if (hours < 12){
    timeofDay= "Good Morning"
  }
  else if( hours>=12 && hours < 17){
  timeofDay= "Good afternoon"
}
else {
  timeofDay= "Good Evening"
}
return(
  <h1>{timeofDay}</h1>
)
}


export default App;
