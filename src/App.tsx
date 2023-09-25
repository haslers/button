import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App" data-testid='app'>
      <Counter/>
    </div>
  );
}

export default App;
