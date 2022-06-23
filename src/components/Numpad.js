import Button from "./blocks/Button";

export default function Numpad(props) {
  return (
    <div>
      <div className="flex bg-orange-400">
        <div>
          <Button value={1} handleClick={props.update} number={1} />
          <Button value={4} handleClick={props.update} number={4} />
          <Button value={7} handleClick={props.update} number={7} />
        </div>
        <div>
          <Button value={2} handleClick={props.update} number={2} />
          <Button value={5} handleClick={props.update} number={5} />
          <Button value={8} handleClick={props.update} number={8} />
        </div>
        <div>
          <Button value={3} handleClick={props.update} number={3} />
          <Button value={6} handleClick={props.update} number={6} />
          <Button value={9} handleClick={props.update} number={9} />
        </div>

      </div>
      <div className="flex bg-orange-400 flex-row">
        <Button number={"."} />
        <Button number={0} />
        <Button number={"="} />
      </div>
    </div>
  );
}
