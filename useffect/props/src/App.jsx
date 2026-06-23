import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  return (
    <div>
      <h1>handle props side effect by useEffect in components</h1>
      <Counter count={count} data={data}></Counter>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  );
}

export default App;
