export default function InputBox(props){
    return (
            <input onChange={props.print} className='w-48 h-12 bg-white border border-orange-400 indent-2' type="text" placeholder="numbers here" />
    )
}

