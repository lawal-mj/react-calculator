export default function Numpad(props) {
  return (
    <div className="flex gap-y-4 flex-col bg-slate-900 w-max p-6 text-2xl rounded-b-2xl">

      <div className="flex gap-x-4">
        <button className="bg-yellow-200 w-12 h-12 rounded-xl">AC</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl">+/-</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl">%</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl" onClick={props.sign}>/</button>
      </div>

      <div className="flex gap-x-4">
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>7</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>8</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>9</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl" onClick={props.sign}>*</button>
      </div>

      <div className="flex gap-x-4">
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>4</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>5</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>6</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl" onClick={props.sign}>-</button>
      </div>

      <div className="flex gap-x-4">
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>1</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>2</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>3</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl" onClick={props.sign}>+</button>
      </div>

      <div className="flex gap-x-4">
        <button className="bg-yellow-200 w-12 h-12 rounded-xl" onClick={props.delete}>B</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl" onClick={props.update}>0</button>
        <button className="bg-red-200 w-12 h-12 rounded-xl">.</button>
        <button className="bg-yellow-200 w-12 h-12 rounded-xl" onClick={props.equals}>=</button>
      </div>


    </div>
  );
}
