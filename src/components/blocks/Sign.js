export default function Sign(props) {
    return (
      <div>
        <div role="button" className="bg-blue-400 w-12 h-8 flex pb-1 pt-0.5 justify-center items-center text-white border text-base border-orange-400">
         {props.sign}
        </div>
      </div>
    );
  }
  