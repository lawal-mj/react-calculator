
import Numpad from "./Numpad"
import Signpad from "./Signpad"
import InputBox from "./InputBox"

export default function App(){
    return (
        <div>
            <InputBox />
            <Signpad />
            <Numpad />
        </div>
    )
}