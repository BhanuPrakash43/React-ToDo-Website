import { useState } from "react";
import styles from "./AddTodoForm.module.css";
import { toast } from "react-toastify";

function AddTodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Check for blank todo
    if (todoTitle.trim().length === 0) {
      setTodoTitle("");
      toast.error("Type something in the input field");
      return;
    }

    // Generating unique ID for each todo by using 'crypto' library
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      completed: false,
    };
    addTodo(newTodo); // Passing the new todo to the parent component's addTodo function
    setTodoTitle(""); // Clearing the input field after adding todo
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Input field for todo title */}
      <input
        type="text"
        name="todo-title-input"
        id="todo-title-input"
        className={styles.todoInput}
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      {/* Button to add todo */}
      <button type="submit" className={styles.todoButton}>
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
