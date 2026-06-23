import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);
  const [data, setdata] = useState(0);

  useEffect(() => {
    //callOnce();
    counterFunction();
  }, [counter]);

  function counterFunction() {
    console.log("counter function is:", counter);
  }
  function callOnce() {
    console.log("callOnce function called");
  }

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setcounter(counter + 1)}>counter{counter}</button>
      <button onClick={() => setdata(data + 1)}>data{data}</button>
    </>
  );
}

export default App;
