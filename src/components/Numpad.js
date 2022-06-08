import Button from "./blocks/Button";

export default function Numpad() {
  return (
    <div>
      <div  className="flex bg-orange-400">
        <div>
          <Button number={1} />
          <Button number={4} />
          <Button number={7} />
        </div>
        <div>
          <Button number={2} />
          <Button number={5} />
          <Button number={8} />
        </div>
        <div>
          <Button number={3} />
          <Button number={6} />
          <Button number={9} />
        </div>
      </div>
      <div  className="flex bg-orange-400 flex-row">
        <Button number={"."} />
        <Button number={0} />
        <Button number={"="} />
      </div>
    </div>
  );
}
