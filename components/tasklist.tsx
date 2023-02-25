import { FC } from "react"
import Task from "./task"

interface TaskListProps {
    tasks: {
        id: string
        title: string
        completed: boolean
    }[]
    onComplete: (id: string) => void
}

const TaskList: FC<TaskListProps> = ({ tasks, onComplete }) => {
    const incompleteTasks = tasks.filter((task) => !task.completed)
    const completeTasks = tasks.filter((task) => task.completed)

    return (
        <div>
            <div>
                <h2>Incomplete Tasks</h2>
                {incompleteTasks.length === 0 && <p>No incomplete tasks</p>}
                {incompleteTasks.map((task) => (
                    <Task key={task.id} task={task} onComplete={onComplete} />
                ))}
            </div>
            <div>
                <h2>Complete Tasks</h2>
                {completeTasks.length === 0 && <p>No complete tasks</p>}
                {completeTasks.map((task) => (
                    <Task key={task.id} task={task} onComplete={onComplete} />
                ))}
            </div>
        </div>
    )
}

export default TaskList
