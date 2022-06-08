import Sign from "./blocks/Sign";

export default function Signpad() {
  return (
    <div className="flex">
      <Sign sign={"+"} />
      <Sign sign={"-"} />
      <Sign sign={"/"} />
      <Sign sign={"*"} />

    </div>
  );
}
