import './App.css';
import Counter from "./Counter";

//render in specific html known as JSX
//javascript code inside of html, looks like html
//image tag. within img tag set source to variable "logo"
//can set variable names in jsx 
//you can only have one root tag for every render file
//parent to child relationship 
//our parent: app component
//we are inputting another component, counter, child, within that

function App() {
  return (
    <div className="App">
      <div>
     <h1> YOU SUCK, TIME IS RUNNING OUT </h1>
     <Counter />
     <Counter />
     <Counter />
     <Counter />
     <Counter />
    </div>
     <h2> AHHHH </h2>
    </div>
  );
}

export default App;
