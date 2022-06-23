import Numpad from "./Numpad"
import InputBox from "./InputBox"

export default function App(){
    return (
        <div className="mt-10 ml-10 border-4 border-black inline-block">
            <InputBox />
            <Numpad />
        </div>

    )
}