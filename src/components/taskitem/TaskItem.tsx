"use client";
import React from "react";

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
    <div className="flex items-center p-2 bg-white text-black border rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => {
          onTaskComplete(task.id);
        }}
        className="mr-4 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
      />
      <span className={task.isCompleted ? "line-through text-gray-500" : ""}>{task.title}</span>
    </div>
  );
};

export default TaskItem;
