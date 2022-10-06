import { useState } from "react";
import "./globals.scss";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>My App</h1>
      <h5>{counter}</h5>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
