import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OtherTasks from "./components/other-tasks";
import HomePageDesign from "./components/homepage-design";
import Home from "./components/other-tasks/home";
import SimpleMessage from "./components/other-tasks/simple-message";
import Counter from "./components/other-tasks/counter";
import CounterUsingFunctionalComponent from "./components/other-tasks/counter/using-functional-component";
import HOCButtonVariants from "./components/other-tasks/HOC";
import Form from "./components/other-tasks/form"; // Import the Form component
import About from "./components/other-tasks/about";
import "./App.css";

const OTHER_TASKS = [
  /* Implement routing in a simple React application with two pages: Home and About.*/
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  /* Create a functional component that displays a simple message. */
  {
    path: "simple-message",
    element: <SimpleMessage />,
  },
  /* Create a class component with the state that increments a counter on a button click.*/
  {
    path: "counter",
    element: <Counter />,
  },
  /* Convert a class component to a functional component using hooks.*/
  {
    path: "counter-using-functional-component",
    element: <CounterUsingFunctionalComponent />,
  },
  /* How would you implement a Higher Order Component (HOC) in React? Provide an example.*/
  {
    path: "HOC",
    element: <HOCButtonVariants />,
  },
  /* Write a form component that handles user input and updates the state accordingly.*/
  {
    path: "form",
    element: <Form />,
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageDesign />} />
        <Route path="/other" element={<OtherTasks />}>
          {OTHER_TASKS.map((task) => (
            <Route key={task.path} path={task.path} element={task.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
