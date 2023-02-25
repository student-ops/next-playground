import { FC, useState } from "react"
import Head from "next/head"
import TaskList from "../components/tasklist"
import AddTask from "../components/addtask"

const INITIAL_TASKS = [
    {
        id: "1",
        title: "Buy milk",
        completed: false,
    },
    {
        id: "2",
        title: "Do laundry",
        completed: false,
    },
    {
        id: "3",
        title: "Read a book",
        completed: true,
    },
]

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS)

    const handleAddTask = (newTask: {
        id: string
        title: string
        completed: boolean
    }) => {
        setTasks([...tasks, newTask])
    }

    const handleCompleteTask = (taskId: string) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed }
            } else {
                return task
            }
        })
        setTasks(updatedTasks)
    }

    return (
        <div>
            <Head>
                <title>Todo List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Todo List</h1>
                <AddTask onAdd={handleAddTask} />
                <TaskList tasks={tasks} onComplete={handleCompleteTask} />
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} My Todo List</p>
            </footer>
        </div>
    )
}

export default Home
