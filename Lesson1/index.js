ReactDOM.render(<h1 className="header">Hello,everyone!!!</h1>, document.getElementById("root"))
//Pulling ReactDOM library,which gives us acces to render(give as ability to append a child 
// to element)
//first element is what I wanna put into file,and second element is where I want to put


//Doing the same using vanila JS:

var h1 = document.createElement("h1")
h1.className = "header"
h1.textContent = "I love to study React!!!"
document.getElementById("root").append(h1)