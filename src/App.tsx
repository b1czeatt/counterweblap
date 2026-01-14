import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <p>Counter</p>
      </nav>
      <div>
        <p>Counter value:</p>
        <p>{count}</p>
        <div className="upper">
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <div className="lower">
          <button onClick={() => setCount((count) => count - 10)}>-10</button>
          <button onClick={() => setCount((count) => count + 10)}>+10</button>
        </div>
      </div>
    </>
  );
}

export default App;
