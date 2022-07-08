//const page = (
  //  <div>
    //     <h1 className = "header"> This is JSX</h1>
      //   <p>This is a paragraph</p>
    //</div>
//)

//Create NavBar using JSX:

const navbar =(
    <nav>
        <h1>FelpApp</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))