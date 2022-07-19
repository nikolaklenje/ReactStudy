
import React from "react"
import  "./App.css"
import Contact from "./components/Contact.js"


function App() {
    return (
        <div className="contacts">
          <Contact 
           names = "Mr.Whiskerson"
           phone= "(212) 555-1234"
           email= "mr.whiskaz@catnap.meow"
          />
          <Contact 
          
          names = "Fluffykins"
          phone= "(212) 555-2345"
          email= "fluff@me.com"
          />
          <Contact 
          names = "Felix"
          phone= "(212) 555-4567"
          email= "thecat@hotmail.com"
          />
          <Contact 
          names = "Pumpkin"
          phone= "0800) CAT KING"
          email= "pumpkin@scrimba.com"
          />
            
            
        </div>
    )
}
     
export default App