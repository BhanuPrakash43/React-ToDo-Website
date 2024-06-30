import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import styles from "./Home.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ todos, setTodos }) {
  // Home component to manage todo list functionality

  // Function to add a new todo
  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Adding the new todo to the todos array
  }

  // Function to toggle the completion status of a todo
  function toggleCompleted(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }; // Toggling the completed status of the todo
        } else {
          return { ...todo };
        }
      })
    );
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Removing the todo with the specified id from the todos array
  }

  // Function to update the title of a todo
  function updateTitle(id, title) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title }; // Updating the title of the todo with the specified id
        } else {
          return { ...todo };
        }
      })
    );
  }

  return (
    <>
      {" "}
      {/* Fragment to wrap multiple elements */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.home}>
        <h1 className={styles.heading}>Todo List</h1>
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          updateTitle={updateTitle}
        />{" "}
        {/* Component to display the list of todos */}
        {/* Conditional rendering: Displaying a button to clear all todos if there are any */}
        {todos.length > 0 ? (
          <button
            className={styles.clearAllTodosBtn}
            onClick={() => {
              setTodos([]); // Clearing all todos
            }}
          >
            Clear All Todos
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Home; // Exporting the Home component
