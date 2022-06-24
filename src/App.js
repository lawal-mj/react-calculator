import Numpad from "./Numpad";
import InputBox from "./InputBox";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  function updateInputBox(e) {
    setInputValue(e.target.value);
  }

  function handleNumber(e) {
    setInputValue(inputValue + e.target.textContent);
  }

  function handleSign() {
    console.log("This is a SIGN bro");
  }

  console.log(inputValue)
  return (
    <div className="mt-10 ml-10 border-4 border-black inline-block">
      <InputBox value={inputValue} updateInput={updateInputBox} />

      <Numpad numberFunction={handleNumber} signFunction={handleSign} />
    </div>
  );
}
