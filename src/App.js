import { useState } from "react";

import Numpad from "./components/Numpad";
import Signpad from "./components/Signpad";
import InputBox from "./components/InputBox";

export default function App() {
  const [inputBoxValue, setinputBoxValue] = useState();

  function updateInput(e) {
    setinputBoxValue(e.target.value);
  }


  function updateNumber(item) {
    console.log(item);
    console.log("Clicking");
  }

  function signEffect(item){
      console.log("Clicking sign " + item)
  }


  console.log(inputBoxValue);
  return (
    <div className="inline-block border-2 border-orange-400 bg-orange-400 mt-9">
      <InputBox print={updateInput} input={inputBoxValue} />
      <Signpad sign={signEffect} />
      <Numpad update={updateNumber} sign={signEffect} />

    </div>
  );
}
