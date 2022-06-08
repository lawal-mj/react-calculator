
import Numpad from "./components/Numpad"
import Signpad from "./components/Signpad"
import InputBox from "./components/InputBox"

export default function App(){
    return (
        <div className="inline-block border-2 border-orange-400 bg-orange-400">
            <InputBox />
            <Signpad />
            <Numpad />
        </div>
    )
}