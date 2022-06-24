export default function Numpad(props) {
  return (
    <div>

      <div>
        <button onClick={props.update}>1</button>
        <button onClick={props.update}>2</button>
        <button onClick={props.update}>3</button>
        <button onClick={props.update}>4</button>
        <button onClick={props.update}>5</button>
        <button onClick={props.update}>6</button>
        <button onClick={props.update}>7</button>
        <button onClick={props.update}>8</button>
        <button onClick={props.update}>9</button>
        <button onClick={props.update}>0</button>
      </div>

      <div>
        <button onClick={props.sign}>+</button>
        <button onClick={props.sign}>-</button>
        <button onClick={props.sign}>*</button>
        <button onClick={props.sign}>/</button>
        <button onClick={props.sign}>=</button>

      </div>
    </div>
  );
}
