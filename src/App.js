import Button from "react-bootstrap/Button";
import "./App.css";
import Counter from "./Components/Counter";
import Example from "./Example";
function App() {
  return (
    //this is just the default app that was created. we want to add our own components now
    ////////////////////////////////////////////
    // <div className="App">
    //   <header className="App-header">
        
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    ////////////////////////////////////////////
    
    // this is just a div as well:
    // <> ..... </>
    // instead of
    // <div> ... </div>
    <>
    <Example  />
    <Example username = "Jaxon" className="App-title"/>
    <Example username = "Greg"/>
    <Example username = "Kimsa"/>
    <Example username = "Bob"/>
    <Button variant="primary">This is a button</Button>
    <h1 className="App-title">Hello World</h1>
    <p>Hello from me!</p>
    <br />
    <br />
    <br />
    <h1>This is a counting app</h1>
    <Counter counterName = "a tally"/>
    </>
  );
}

export default App;
