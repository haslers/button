import {useState} from "react";
import {increment} from "../util/increment";
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (<>
        <div data-testid="display">Counter: {count}</div>
        <button onClick={() => setCount(increment(count))}>increment</button>
    </>);
}

export {Counter};