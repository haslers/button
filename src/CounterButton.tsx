import {useState} from "react";

const CounterButton = () => {
    const [count, setCount] = useState(0);
    return (<>
        <div>Counter: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </>);
}

export {CounterButton};