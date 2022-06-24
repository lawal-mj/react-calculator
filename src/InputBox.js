export default function InputBox(props){
    return (
        <div>
            <input onChange={props.updateInput} type="text" className="w-72 h-12 indent-2 border border-red-700" />
        </div>
    )
}