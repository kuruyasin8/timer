import React, { useEffect } from "react";
import "./App.css";

import { Countdown } from "./lib/Countdown";

function App() {
  const [count, setCount] = React.useState(20);
  const counter = new Countdown(20, setCount, () => alert("done!"));

  useEffect(() => {
    document.title = process.env.REACT_APP_SITE_HEADER ?? "";
  }, []);

  return (
    <div className="list">
      <div className="clock">{count}</div>
      <div className="center">
        <button className="button" onClick={() => counter.start()}>
          Start
        </button>
        <button className="button" onClick={() => counter.stop()}>
          Stop
        </button>
        <button className="button" onClick={() => counter.reset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
