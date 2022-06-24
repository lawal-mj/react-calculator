import Numpad from "./Numpad"
import InputBox from "./InputBox"
import OutputBox from "./OutputBox"
import { useState } from "react"

export default function App(){

    const [ inputValue, setInputValue ] = useState(0)

    function updateInput(e){
        setInputValue(inputValue + e.target.textContent)
    }

    function signAction(){
        console.log("This is a sign")
    }


    return(
        <div>
            <InputBox input={inputValue} />
            <OutputBox />
            <Numpad sign={signAction} update={updateInput} />
        </div>
    )
}