import { Button } from "./Button";
import { InputText } from "./InputText";
import { InputCheckbox } from "./InputCheckbox";
import { Task } from "./Task";
import { useEffect, useState } from 'react';
import '../css/taskList.css'
import { saveTaskListToLocalStorage } from "../services/localStorage";
import { Icon } from "./Icon";

export function TaskList() {
    const [text, setText] = useState('')
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
            return JSON.parse(savedTasks)
        } else {
            return []
        }
    })

    useEffect(() => {
        const markAll = document.getElementById('mark-all')
        const checkboxes = document.querySelectorAll('.tl-task-checkbox')
        const markAllHandler = () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = markAll.checked
            })

            tasks.forEach(task => {
                task.completed = markAll.checked
            })

            updateTaskList(tasks)
        }

        markAll.addEventListener('change', markAllHandler)

        return () => {
            markAll.removeEventListener('change', markAllHandler)
        }

    }, [tasks])

    function addTask() {
        const newTask = {
            id: tasks.length + 1,
            text: text,
            completed: false,
            editable: false
        }

        // Save tasks to local storage
        updateTaskList([...tasks, newTask])

        // Clear inputs
        setText('')
    }

    function editTask(id) {
        const newTasks = tasks.map(task => {
            if (task.id === id && !task.completed) {
                task.editable = !task.editable
            }
            return task
        })

        updateTaskList(newTasks)
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(task => task.id !== id)
        updateTaskList(newTasks)
    }

    function changeTaskText(value, id) {
        const newTasks = tasks.map(task => {
            if (task.editable && task.id === id) {
                task.text = value
            }
            return task
        })

        updateTaskList(newTasks)
    }

    function changeTaskStatus(value, id) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = value
            }
            return task
        })

        updateTaskList(newTasks)
    }

    function updateTaskList(tasks) {
        // Update tasks state
        setTasks(tasks)
        // Save tasks to local storage
        saveTaskListToLocalStorage(tasks)
    }

    return (
        <main className="tl-container">
            <h1 className="tl-header-title">ToDo List</h1>
            <section className="tl-form-container">
                <label className="tl-form-title">
                    What needs to be done?
                </label>
                <article className="tl-mark-all">
                    <input
                        id="mark-all"
                        type="checkbox"
                        className="tl-mark-all-checkbox"
                    />
                    <label htmlFor="mark-all">Mark all as complete</label>
                </article>
                <article className="tl-add-task-container">
                    <InputText
                        className="tl-add-task-input"
                        placeholder="Add new task"
                        valueInput={text}
                        handleInput={(value) => setText(value)}
                    />
                    <Button
                        className="tl-add-task-button"
                        handleClick={addTask}
                        disabled={!text}
                        type="primary"
                    >Add Task
                    </Button>
                </article>
            </section>
            <ul className="tl-task-container">
                {
                    tasks.length > 0 && tasks.map(({ id, text, completed, editable }) => (
                        <Task className="tl-task" key={id}>
                            <InputCheckbox
                                id={`task-${id}-checkbox`}
                                className="tl-task-checkbox"
                                valueInput={completed}
                                handleInput={(value) => changeTaskStatus(value, id)}
                            />
                            <InputText
                                id={`task-${id}-input`}
                                className="tl-task-input"
                                defaultValue={text}
                                handleInput={(value) => changeTaskText(value, id)}
                                disabled={!editable}
                            />
                            <div className="tl-task-icon-container">
                                <Icon
                                    handleIcon={() => editTask(id)}
                                    iconStyles={{ marginRight: '1rem', cursor: 'pointer' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={16} width={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </Icon>
                                <Icon
                                    icon="delete"
                                    handleIcon={() => deleteTask(id)}
                                    iconStyles={{ cursor: 'pointer' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={16} width={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </Icon>
                            </div>
                        </Task>
                    ))
                }
            </ul>
        </main>
    )
}