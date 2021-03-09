import Confetti from "react-confetti";
import { useState } from "react";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(200);
  const [wind, setWind] = useState(0);
  const [gravity, setGravity] = useState(1);

  const toggleConfetti = () => setIsRunning(!isRunning);
  const buttonText = isRunning ? `Turn Confetti off` : `Turn Confetti on`;

  const onParticlesChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };

  const onWindChange = (e) => setWind(parseFloat(e.target.value));
  const onGravityChange = (e) => setGravity(parseFloat(e.target.value));

  const confettiColors = ["#00B7FF", "#0FFF00", "#FF0000"];

  return (
    <div>
      <div>
        <label htmlFor="particles">Particle Count:</label>
        <input
          type="range"
          id="num-particles"
          min="1"
          max="1000"
          step="1"
          onChange={onParticlesChange}
        ></input>
      </div>
      <div>
        <label htmlFor="wind">Wind: </label>
        <input
          type="range"
          id="wind"
          min="-1"
          max="1"
          step="0.1"
          onChange={onWindChange}
        ></input>
      </div>
      <div>
        <label htmlFor="gravity">Gravity: </label>
        <input
          type="range"
          id="gravity"
          min="0"
          max="1"
          step="0.05"
          onChange={onGravityChange}
        ></input>
      </div>
      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
      </div>
      <Confetti
        confettiSource={{
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          w: 0,
          h: 0,
        }}
        colors={confettiColors}
        numberOfPieces={numParticles}
        gravity={gravity}
        wind={wind}
        run={isRunning}
      ></Confetti>
    </div>
  );
}

export default ConfettiDemo;
