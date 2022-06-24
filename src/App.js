import Numpad from "./Numpad"
import InputBox from "./InputBox"
import { useState } from "react"

export default function App(){

    const [ inputValue, setInputValue ] = useState();

    function updateInputBox(e){
        setInputValue(e.target.value)
    }

    function handleNumber(){
        console.log("This is a number")
    }

    function handleSign(){
        console.log("This is a SIGN bro")
    }


    // console.log(inputValue)
    return (
        <div className="mt-10 ml-10 border-4 border-black inline-block">
            <InputBox updateInput={updateInputBox}/>

            <Numpad numberFunction={handleNumber} signFunction={handleSign}/>
        </div>

    )
}