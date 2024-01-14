import { taskInput, taskTime, addTaskButton, dayList, nightList } from './export.js'
import { addTask } from './public/index.js'


addTaskButton.addEventListener('click', () => {
    addTask(taskInput, taskTime, dayList, nightList)
})