import ChatMessage from "./props/chat-message";
import SpeakButton from "./props/speak-button";
import WelcomeMessage from "./props/welcome-message";
import ClickButton from "./state/click-button";
import CustomIncrement from "./state/custom-increment";
import SpeakForm from "./state/speak-form";
import MusicalButton from "./dependencies/musical-button";
import ConfettiDemo from "./dependencies/confetti-demo";
import Todos from "./arrays/todos";

function DemosPage() {
  return (
    <main>
      <h1>My First React App</h1>

      <h2>Rendering arrays</h2>
      <Todos></Todos>

      <h2>Cofetti!</h2>
      <ConfettiDemo />
      <h2>Tone.js Music</h2>
      <MusicalButton>Play Some Beats 🎧🎧🎧</MusicalButton>
      <h2>Speak Form</h2>
      <SpeakForm></SpeakForm>
      <h2>Custom Increment</h2>
      <CustomIncrement></CustomIncrement>
      <h2>Stateful Buttons</h2>
      <ClickButton></ClickButton>

      <h2>Welcome</h2>
      {/* name and greeting become properties on an object passed in to WelcomeMessage */}
      <WelcomeMessage name="Mike" greeting="Hello" />
      <WelcomeMessage name="Callie" greeting="Howdy" />
      <WelcomeMessage name="Class" greeting="Welcome" />

      <h2>Buttons</h2>
      {/* Values for properties can be any JS expression. */}
      <SpeakButton message="Hello there!" />
      <SpeakButton message="Speedy speed speed!" rate={3} pitch={2} />

      <h2>Chat</h2>
      <ChatMessage
        message="Yo, how's React?"
        userName="PokeMike"
        date="02/01/21"
      />
      <ChatMessage
        message="I think its going well..."
        userName="CallieCats2000"
        date="02/02/21"
      />
      <ChatMessage
        message="Props to you."
        userName="PokeMike"
        date="02/03/21"
      />
      <ChatMessage
        message="Ha. ha. You are not funny."
        userName="CallieCats2000"
        date="02/04/21"
      />
    </main>
  );
}

export default DemosPage;
