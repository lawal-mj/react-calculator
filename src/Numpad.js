export default function Numpad(props){
    return (
        <div className="flex flex-col text-2xl">

            <div className="flex w-72 h-10 flex-auto">
                <div onClick={props.signFunction} className="bg-blue-700 grow flex items-center justify-center border">+</div>
                <div onClick={props.signFunction} className="bg-blue-700 grow flex items-center justify-center border">-</div>
                <div onClick={props.signFunction} className="bg-blue-700 grow flex items-center justify-center border">*</div>
                <div onClick={props.signFunction} className="bg-blue-700 grow flex items-center justify-center border">/</div>
            </div>

            <div className="flex">
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">1</div>
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">2</div>
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">3</div>
            </div>


            <div className="flex">
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">4</div>
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">5</div>
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">6</div>
            </div>


            <div className="flex">
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">7</div>
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">8</div>
                <div onClick={props.numberFunction} className="w-24 h-14 bg-orange-700 flex items-center justify-center border">9</div>
            </div>


            <div className="flex">
                <div onClick={props.numberFunction} className="w-24 h-12 bg-yellow-400 flex items-center justify-center border">.</div>
                <div onClick={props.numberFunction} className="w-24 h-12 bg-orange-700 flex items-center justify-center border">0</div>
                <div onClick={props.signFunction} className="w-24 h-12 bg-purple-700 flex items-center justify-center border">=</div>
            </div>

        </div>
    )

}