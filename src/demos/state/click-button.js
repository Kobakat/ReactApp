import { useState } from "react";

function ClickButton() {
  //const animals = ["cat", "dog", "dragon"];
  //const [animal1, animal2, aniaml3] = animals;
  //console.log(animal1);
  //console.log(animal3);

  // useState returns back an array like this: [currentValue, setterFunction]
  const [numClicks, setNumClicks] = useState(0);

  const onButtonClick = () => {
    setNumClicks(numClicks + 1);
  };

  const clicksEmoji = "👍".repeat(numClicks);

  const text =
    numClicks === 0 ? "Click me!!!" : `You've clicked ${clicksEmoji}`;

  const buttonStyle = {
    width: "10rem",
    minHeight: "10rem",
    transform: `rotate(${numClicks * 10}deg)`,
    transition: "all 0.2s",
  };

  return (
    <button style={buttonStyle} onClick={onButtonClick}>
      {text}
    </button>
  );
}

export default ClickButton;
