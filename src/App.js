import Numpad from "./Numpad"
import InputBox from "./InputBox"
import OutputBox from "./OutputBox"
import { useState } from "react"

export default function App(){

    const [ inputValue, setInputValue ] = useState(0)
    const [ oldValue, setOldValue ] = useState(0)
    const [ sign, setSign ] = useState("+")

    const [ outputValue, setOutputValue ] = useState("")

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
        switch (sign) {
            case "+":
                setOutputValue (Number(oldValue) + Number(inputValue) )
                setInputValue(0)
                break;
        
            case "-":
                setOutputValue (Number(oldValue) - Number(inputValue) )
                setInputValue(0)
                break;
        
            case "*":
                setOutputValue (Number(oldValue) * Number(inputValue) )
                setInputValue(0)
                break;
        
            case "/":
                setOutputValue (Number(oldValue) / Number(inputValue) )
                setInputValue(0)
                break;
        
            default:
                break;
        }
    }



    function deleteNumber(){
        const inputValueToString = inputValue.toString(); 
        let newString = "";
        for (let i =0; i < inputValueToString.length; i++){
            if (i < inputValueToString.length -1 ){
                newString = newString +  inputValueToString[i]
            }           
        }
        setInputValue(newString)        
    }


    // console.log(sign)

    return(
        <div>
            <InputBox input={inputValue} />
            <OutputBox output={outputValue} />
            <Numpad sign={signAction} update={updateInput} equals={equalsTo} delete={deleteNumber} />
        </div>
    )
}