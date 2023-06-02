import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
        setCount(count + 5)
        setCount(count + 10)
        setCount(prev => prev + 5)
        setCount(prev => prev + 5)
        console.log(count);
    }

    /**
     *               p
     *              a|
     *              ||
     * 0, 1, 5, 10, 15
     */
    return (
        <>
            <button onClick={add}>PLUS</button>
            <div>{count}</div>
            <button>MINUS</button>
        </>
    )
}

export default Counter