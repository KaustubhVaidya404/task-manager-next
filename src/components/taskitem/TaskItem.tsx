"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TaskItemProps = {
  task: Task;
  onTaskComplete: (taskId: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskComplete }) => {
  return (
    <BackgroundGradient containerClassName="mx-10 mt-2">
      <div className="flex items-center p-2 bg-transparent text-black  rounded-lg shadow-sm">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => {
            onTaskComplete(task.id);
          }}
          className="mr-4 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={task.isCompleted ? "line-through text-gray-500" : ""}>
          {task.title}
        </span>
      </div>
    </BackgroundGradient>
  );
};

export default TaskItem;
