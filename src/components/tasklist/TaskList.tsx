    import React from "react";
import TaskItem, {Task} from "../taskitem/TaskItem";

type TaskListProps = {
    tasks: Task[];
    onTaskComplete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onTaskComplete}) => {
    return (
        <div className="m-4 space-y-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onTaskComplete={onTaskComplete} />
            ))}
        </div>
    );
};

export default TaskList;