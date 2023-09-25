import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App" data-testid='app'>
        <h1>Counter App!</h1>
      <Counter/>
    </div>
  );
}

export default App;
