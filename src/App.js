import { useState } from "react";
import Button from "react-bootstrap/Button";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Example from "./Example";
import "./styles.css";
function App() {
  const [isDark, setIsDark] = useState (false);

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
    
    <div className = {isDark? "dark":""}>
    <Header
      title="Simple React Site"
      isDark = {isDark}
      onToggle = {()=> setIsDark(!isDark)}
    />

    <main>
    <h2>This is a counting app</h2>
    <Counter counterName = "a tally"/>
    </main>
    </div>
    </>
  );
}

export default App;
