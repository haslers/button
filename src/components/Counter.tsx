import {useState} from "react";
import {increment} from "../domain/increment";
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (<>
    <div data-testid="display">Counter: {count}</div>
    <button style={{ opacity: "100%" }} onClick={() => setCount(increment(count, 1))}>increment</button>
  </>);
}

export {Counter};