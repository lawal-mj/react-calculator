import Numpad from "./Numpad"
import InputBox from "./InputBox"
import OutputBox from "./OutputBox"
import { useState } from "react"

export default function App(){

    const [ inputValue, setInputValue ] = useState(0)
    const [ oldValue, setOldValue ] = useState(0)
    const [ sign, setSign ] = useState("+")

    function updateInput(e){
        setInputValue(inputValue + e.target.textContent)
    }

    function signAction(){
        console.log("This is a sign")
    }

    //takes in the old value as the parameter
    function storeOldValue(x){
        setOldValue(x)
    }

    //TAKES IN THE NEW SIGN AS THE PARAMETER
    function setCurrentSign(x){
        setSign(x)
    }

    // TAKES THE EVENT AS A PARAMETER
    // stores the old value in a variable, takes note of the sign by storing it in a state and resets the input value to zero
    function signAction(e){
        switch (e.target.textContent) {
            case "+":
                storeOldValue(inputValue)
                setInputValue(0)
                setCurrentSign("+")
                break;

            case "-":
                storeOldValue(inputValue)
                setInputValue(0)
                setCurrentSign("-")
                break;

            case "/":
                storeOldValue(inputValue)
                setInputValue(0)
                setCurrentSign("/")
                break;

            case "*":
                storeOldValue(inputValue)
                setInputValue(0)
                setCurrentSign("*")
                break;

            default:
                console.log("Error")
                break;
        }
    }
    
    
    function equalsTo(){
        console.log("the equals sign")
    }


    console.log(sign)

    return(
        <div>
            <InputBox input={inputValue} />
            <OutputBox />
            <Numpad sign={signAction} update={updateInput} equals={equalsTo} />
        </div>
    )
}