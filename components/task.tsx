import { FC } from "react"

class TaskProps {
    task: {
        id: string
        title: string
        completed: boolean
    }
    onComplete: (id: string) => void
}

const Task: FC<TaskProps> = ({ task, onComplete }) => {
    const handleToggle = () => {
        onComplete(task.id)
    }

    return (
        <div>
            <span>{task.title}</span>
            <button onClick={handleToggle}>
                {task.completed ? "Mark incomplete" : "Mark complete"}
            </button>
        </div>
    )
}

export default Task
