import {useState} from "react";
import {increment} from "../util/increment";

const CounterButton = () => {
    const [count, setCount] = useState(0);
    return (<>
        <div data-testid="display">Counter: {count}</div>
        <button onClick={() => setCount(increment(count))}>increment</button>
    </>);
}



export {CounterButton};