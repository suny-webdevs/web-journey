import { useState } from "react";
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1
        setCount(newCount)
    }

    return (
        <div>
            <button onClick={handleAdd} disabled={count >= 9}>+</button>
            <input className="input-box" type="text" name="" id="" value={count} />
            <button onClick={handleReduce} disabled={count <= 0}>-</button>
        </div>
    );
}

export default Counter;
