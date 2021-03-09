import { useState } from "react";

function CustomIncrement() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onApplyIncrement = () => {
    setCount(parseInt(count, 10) + parseInt(increment, 10));
  };

  const onIncrementChange = (e) => setIncrement(e.target.value);

  const onReset = () => {
    setCount(0);
    setIncrement(1);
  };

  const buttonStyle = {
    width: "8rem",
    minHeight: "5rem",
  };

  const buttonText =
    increment >= 0 ? `Add ${increment}` : `Subtract ${increment}`;

  return (
    <div>
      <div>
        <p>Current count is: {count}</p>
        <p>Current increment is {increment}</p>
      </div>
      <div>
        <label htmlFor="increment">Increment</label>
        <input
          id="increment"
          type="range"
          min="-10"
          max="10"
          step="1"
          onChange={onIncrementChange}
          value={increment}
        />
      </div>
      <span>
        <button style={buttonStyle} onClick={onApplyIncrement}>
          {buttonText}
        </button>
        <button style={buttonStyle} onClick={onReset}>
          Reset
        </button>
      </span>
    </div>
  );
}

export default CustomIncrement;
