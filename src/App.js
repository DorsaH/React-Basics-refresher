import { Exmaple2 } from "./Example";

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
    <Exmaple2 />
    <h1>Hello World</h1>
    <p>Hello from me!</p>
    </>
  );
}

export default App;
