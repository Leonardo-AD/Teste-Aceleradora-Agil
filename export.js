// Main container
export const taskInput     = document.querySelector('#task-input')
export const taskTime      = document.querySelector('#task-time')
export const timeSelected  = taskTime.options[taskTime.selectedIndex].value
export const addTaskButton = document.querySelector('#add-task-button')

export const dayList       = document.querySelector('#day-list')
export const nightList     = document.querySelector('#night-list')
export const deleteTask    = document.querySelector('#delete-task')