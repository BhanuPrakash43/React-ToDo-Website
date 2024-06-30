import styles from "../pages/Completed.module.css";
import { MdDoubleArrow } from "react-icons/md";

function Completed({ todos }) {
  // Completed component to display completed todos
  const completedTodos = todos.filter((todo) => todo.completed); // Filtering completed todos

  return (
    <div className={styles.completed}>
      <h1 className={styles.comp}>Completed Todos List</h1>
      {completedTodos.map(
        (
          todo // Mapping through completed todos
        ) => (
          <div key={todo.id}>
            {" "}
            {/* Container for each completed todo */}
            <h2 className={styles.compTitle}>
              <MdDoubleArrow /> {todo.title}
            </h2>{" "}
            {/* Displaying completed todo title with double arrow icon */}
          </div>
        )
      )}
    </div>
  );
}

export default Completed;
