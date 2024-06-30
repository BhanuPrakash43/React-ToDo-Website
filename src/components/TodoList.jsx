import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleCompleted, updateTitle }) {
  return (
    <div>
      {" "}
      {/* Container for todo items */}
      {todos.map((todo) => (
        <Todo
          todo={todo} // Passing todo item as a prop
          key={todo.id} // Using todo id as the key for React list rendering
          deleteTodo={deleteTodo} // Passing deleteTodo function as a prop
          toggleCompleted={toggleCompleted} // Passing toggleCompleted function as a prop
          updateTitle={updateTitle} // Passing updateTitle function as a prop
        />
      ))}
    </div>
  );
}

export default TodoList;
