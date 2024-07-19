import React from "react";
import { Link, Outlet } from "react-router-dom";
import OtherTasksLayout from "./layout";

const links = [
  { path: "/other/home", label: "Home" },
  { path: "/other/about", label: "About" },
  { path: "/other/simple-message", label: "Simple Message" },
  { path: "/other/counter", label: "Counter" },
  {
    path: "/other/counter-using-functional-component",
    label: "Counter using functional component",
  },
  { path: "/other/HOC", label: "HOC Button Variants" },
  { path: "/other/form", label: "Form" },
];

export default function OtherTasks() {
  return (
    <OtherTasksLayout>
      <div className="min-h-[calc(100vh_-301px)]">
        <nav>
          <ul className="other-task-container flex-wrap">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center">
          <Outlet />
        </div>
      </div>
    </OtherTasksLayout>
  );
}
