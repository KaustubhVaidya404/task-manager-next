"use client";
import NavBar from "@/components/navbar/Navbar";
import TaskList from "@/components/tasklist/TaskList";
import React, { useState } from "react";

const HomePage: React.FC = () => {
    const [data, setData] = useState([
        {
          id: 1,
          title: "abc",
          isCompleted: false,
        },
        {
          id: 2,
          title: "pqr",
          isCompleted: false,
        },
        {
          id: 3,
          title: "xyz",
          isCompleted: false,
        },
        {
          id: 4,
          title: "lmn",
          isCompleted: false,
        },
      ]);
      const handleTaskComplete = (taskId: number) => {
        setData((prevData) =>
          prevData.map((task) =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
          )
        );
      };
  return (
    <div>
      <NavBar
        name="TestProjectX"
        navItems={[
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <TaskList tasks={data} onTaskComplete={handleTaskComplete} />
    </div>
  );
}

export default HomePage;