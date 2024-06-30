// Importing necessary functions and components from react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Completed from "./pages/Completed";
import Layout from "./pages/Layout";

function App() {
  // State for managing todos
  // const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Complete QuadB Tech React assignment",
      completed: false,
    },
    {
      id: "2",
      title: "Daily practice React js to get efficiency",
      completed: false,
    },
    {
      id: "3",
      title: "Always write clean code ",
      completed: false,
    },
  ]);

  // Creating routes using react-router-dom functions
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {" "}
        {/* Parent route */}
        <Route
          index
          element={<Home todos={todos} setTodos={setTodos} />}
        />{" "}
        {/* Home route */}
        <Route path="about" element={<About />} /> {/* About route */}
        <Route path="completed" element={<Completed todos={todos} />} />{" "}
        {/* Completed route */}
      </Route>
    )
  );

  return (
    <>
      {/* Providing the router to the application */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
