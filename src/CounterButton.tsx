import {useState} from "react";


const CounterButton = () => {
    const [count, setCount] = useState(0);
    return (<button onClick={() => setCount(count + 1)}>counter</button>);
}

export { CounterButton };