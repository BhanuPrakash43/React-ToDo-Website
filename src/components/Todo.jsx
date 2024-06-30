import { useState } from "react";
import styles from "./Todo.module.css";
import { ImCross } from "react-icons/im"; // Importing cross icon from react-icons
import { FaRegEdit } from "react-icons/fa";
import EditTodo from "./EditTodo";

function Todo({ todo, deleteTodo, toggleCompleted, updateTitle }) {
  const [isUpdateMode, setIsUpdateMode] = useState(false); // Initializing state for update mode

  function handleDelete() {
    deleteTodo(todo.id); // Calling deleteTodo function passed as a prop with the todo id
  }

  function handleToggle() {
    toggleCompleted(todo.id); // Calling toggleCompleted function passed as a prop with the todo id
  }

  if (isUpdateMode) {
    // Rendering EditTodo component if update mode is true
    return (
      <EditTodo
        id={todo.id}
        updateTitle={updateTitle}
        setIsUpdateMode={setIsUpdateMode}
        title={todo.title}
      />
    );
  }

  return (
    <div className={styles.todo}>
      {" "}
      {/* Todo component */}
      <h3 className={todo.completed ? styles.completed : ""}>
        {todo.title}
      </h3>{" "}
      {/* Todo title with conditional styling for completed todos */}
      <div className={styles.buttonContainer}>
        {" "}
        {/* Container for buttons */}
        <span onClick={() => setIsUpdateMode(true)} className={styles.btn}>
          {" "}
          {/* Edit button */}
          <FaRegEdit />
        </span>
        <input
          type="checkbox"
          name="todo-checkbox"
          id="todo-checkbox"
          checked={todo.completed}
          onChange={handleToggle} // Checkbox to toggle todo completion status
          className={styles.todoCheckbox}
        />
        <span onClick={handleDelete} className={styles.btn}>
          {" "}
          {/* Delete button */}
          <ImCross />
        </span>
      </div>
    </div>
  );
}

export default Todo;
