import { useState } from "react";

function Counter(props){
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("Hello");

    let updatedText = "";
    return(
        <>
            <p>This is counting {props.counterName}</p>
            <p>{counter}</p>
            <button onClick={() => {setCounter(counter +1)}}>Click me!</button>

            <p>{text}</p>
            {/* <input type= "text" onChange={(textInput) => {setText(textInput.target.value)}}></input> */}



            <input type="text" onChange={(textInput) => {updatedText = textInput.target.value}}></input>
            <button onClick={() => {setText(updatedText)}}>Click me!</button>
        </>
    )
}

export default Counter;