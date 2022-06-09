export default function Button(props) {
  return (
    <div>
      <div role="button" className="bg-gray-700 w-16 h-10 m-0 text-center py-1 flex justify-center items-center text-2xl text-white border border-orange-400">
        {props.number}
      </div>
    </div>
  );
}
