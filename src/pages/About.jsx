import styles from "../pages/About.module.css";

function About() {
  // About component to provide information about the Todo app
  return (
    <div className={styles.about}>
      <h1>About Todo app</h1>
      <div>
        <h2>How Todo app works?</h2>
        <h3>
          ANS - You can type your work list in the input box and just click
          enter or add button to add your todos.
        </h3>
      </div>
    </div>
  );
}

export default About;
