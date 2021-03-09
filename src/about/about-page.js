import "./about-page.css";
import animationImage from "../images/beeple-potus-3012.gif";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>

      <h2>Brendan Lienau</h2>
      <p>
        We're learning HTML <em>together</em>!
      </p>

      <p>Some things I've been doing lately:</p>
      <ul class="emoji-list">
        <li>Coding</li>
        <li>Playing Games</li>
        <li>Working on projects</li>
      </ul>
      <p>Some languages I am going to be using:</p>
      <ul class="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
      </ul>
      <p>Demo list:</p>
      <ul>
        <li>Some</li>
        <li>Other</li>
        <li>Stuff</li>
      </ul>

      <p>
        An app I used daily is
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferer"
          title=" YouTube"
        >
          YouTube
        </a>
        .
      </p>

      <img src={animationImage} alt="Some cool art" width="300" />
    </main>
  );
}

export default AboutPage;
