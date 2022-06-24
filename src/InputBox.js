export default function InputBox(props) {
  return (
    <div onChange={()=>props.updateInput()} className="w-72 h-12 indent-2 border border-red-700 items-center flex justify-center text-xl">  
        {props.value}
    </div>
  )
}

// 
