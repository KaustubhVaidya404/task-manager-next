"use client";
import NavBar from "@/components/navbar/Navbar";
import TaskList from "@/components/tasklist/TaskList";
import React, { useState } from "react";

const HomePage: React.FC = () => {
    const [data, setData] = useState([
  { id: 1, title: "Buy groceries", isCompleted: false },
  { id: 2, title: "Finish homework", isCompleted: false },
  { id: 3, title: "Clean the house", isCompleted: false },
  { id: 4, title: "Prepare dinner", isCompleted: false },
  { id: 5, title: "Read a book", isCompleted: false },
  { id: 6, title: "Exercise for 30 minutes", isCompleted: false },
  { id: 7, title: "Call a friend", isCompleted: false },
  { id: 8, title: "Water the plants", isCompleted: false },
  { id: 9, title: "Check emails", isCompleted: false },
  { id: 10, title: "Plan next week", isCompleted: false },
  { id: 11, title: "Complete project report", isCompleted: false },
  { id: 12, title: "Schedule doctor appointment", isCompleted: false },
  { id: 13, title: "Organize the closet", isCompleted: false },
  { id: 14, title: "Meditate for 10 minutes", isCompleted: false },
  { id: 15, title: "Pay utility bills", isCompleted: false },
  { id: 16, title: "Update resume", isCompleted: false },
  { id: 17, title: "Review budget", isCompleted: false },
  { id: 18, title: "Write a blog post", isCompleted: false },
  { id: 19, title: "Attend team meeting", isCompleted: false },
  { id: 20, title: "Declutter the workspace", isCompleted: false }
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
      <div>
      <NavBar
        name="TestProjectX"
        navItems={[
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      </div>
      <div className="mt-40">
      <TaskList tasks={data} onTaskComplete={handleTaskComplete} />
      </div>
    </div>
  );
}

export default HomePage;