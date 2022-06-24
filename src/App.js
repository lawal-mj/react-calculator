
// THIS IS A VERY UNCONVENTIONAL CALCULATOR, LOGIC HASNT BEEN MADE EFFECTIVE YET SO BEAR WITH ME😢


import Numpad from "./Components/Numpad"
import InputBox from "./Components/InputBox"
import OutputBox from "./Components/OutputBox"
import { useState } from "react"

export default function App(){

    /*  1.State Variables  */    
        const [ inputValue, setInputValue ] = useState(0)
        const [ oldValue, setOldValue ] = useState(0)
        const [ outputValue, setOutputValue ] = useState("")
        const [ sign, setSign ] = useState("+")



    /*  2.State Functions  */

        // constantly updates the input value as i press numbers 
        function updateInput(e){
            setInputValue(inputValue + e.target.textContent)
        }

        //takes in the old value as the parameter
        function storeOldValue(x){
            setOldValue(x)
        }

        //TAKES IN THE NEW SIGN AS THE PARAMETER
        function setCurrentSign(x){
            setSign(x)
        }



    /*  2.Regular Functions  */

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



    return(
        <div>
            <InputBox input={inputValue} />
            <OutputBox output={outputValue} />
            <Numpad sign={signAction} update={updateInput} equals={equalsTo} delete={deleteNumber} />
        </div>
    )
}