import Button from './blocks/Button'

export default function Numpad() {
  return (
    <div className="flex">
      <div>
        <Button />
        <Button />
        <Button />
      </div>
      <div>
        <Button />
        <Button />
        <Button />
      </div>
      <div>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}