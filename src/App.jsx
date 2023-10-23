import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import CounterConfig from "./components/Counter/CounterConfig.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function setCounterHandler(counter) {
    setChosenCount(counter);
  }

  return (
    <>
      <Header />
      <main>
        <CounterConfig onSetCounter={setCounterHandler} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
