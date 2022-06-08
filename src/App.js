
import Numpad from "./components/Numpad"
import Signpad from "./components/Signpad"
import InputBox from "./components/InputBox"

export default function App(){
    return (
        <div>
            <InputBox />
            <Signpad />
            <Numpad />
        </div>
    )
}