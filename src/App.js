import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter((prev) => prev + 1);
    //or
    // setCounter(counter + 2);
    // console.log(counter);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="App">
      <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementer}>Click</button>
      <button onClick={toggler}>Toggle</button>
    </div>
  );
}

export default App;
