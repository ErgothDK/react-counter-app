import React, { useState } from "react";
import { log } from "../../log.js";

const CounterConfig = (props) => {
  log("<CounterConfig />", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    props.onSetCounter(enteredNumber);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default CounterConfig;
