import { dayList } from "../export.js"

export function removeTaskDay() {
    
    const removeButton = document.createElement('button')
    removeButton.setAttribute('id','delete-task')
    removeButton.textContent = 'delete'
    removeButton.className = 'material-symbols-outlined'

    removeButton.addEventListener('click', function(){

        let task = document.querySelector("#li-task-day");
        dayList.removeChild(task);
    })

    return removeButton;
}