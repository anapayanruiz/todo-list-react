export function saveTaskListToLocalStorage(taskList) {
    localStorage.setItem('tasks', JSON.stringify(taskList))
}