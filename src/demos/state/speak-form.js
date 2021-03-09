import { useState } from "react";

function SpeakForm() {
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  //Change event handler. Gets event for the change
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onRateChange = (e) => setRate(e.target.value);
  const onPitchChange = (e) => setPitch(e.target.value);

  const speak = () => {
    // alert(message);
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.pitch = pitch;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          id="message"
          type="text"
          onChange={onMessageChange}
          value={message}
        />
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <input
          id="rate"
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          onChange={onRateChange}
          value={rate}
        />
      </div>
      <div>
        <label htmlFor="pitch">Pitch:</label>
        <input
          id="pitch"
          type="range"
          min="0.1"
          max="2"
          step="0.05"
          onChange={onPitchChange}
          value={pitch}
        />
      </div>
      <button onClick={speak}>Speak</button>
    </div>
  );
}

export default SpeakForm;
