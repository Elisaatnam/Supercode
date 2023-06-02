import { useState } from "react"

const ToDo = (props) => {
    const [done, setDone] = useState(false)

    function erledigt() {
        setDone(prev => !prev)

    }

    return (
        <div onClick={erledigt} style={done ? { textDecoration: 'line-through' } : {}}>{props.todo}</div>
        // <div onClick={()=>setDone(true)} style={done ? { textDecoration: 'underline' } : {}}>{props.todo}</div>
    )
}

export default ToDo