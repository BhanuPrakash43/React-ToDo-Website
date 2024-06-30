import { useState } from "react";
import styles from "./EditTodo.module.css";

function EditTodo({ id, updateTitle, setIsUpdateMode, title: prevTitle }) {
  const [title, setTitle] = useState(prevTitle || ""); // Initializing state for todo title, using previous title if available

  function handleSubmit(e) {
    e.preventDefault(); // Preventing default form submission behavior
    updateTitle(id, title); // Calling the updateTitle function passed as a prop with the todo id and updated title
    setIsUpdateMode(false); // Setting update mode to false after submitting the form
  }

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      {" "}
      {/* Form component for editing todo */}
      <input
        className={styles.editInput}
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value); // Updating title state as the user types
        }}
      />
      <button className={styles.confirmButton}>Confirm</button>{" "}
      {/* Button to confirm the edit */}
    </form>
  );
}

export default EditTodo;
