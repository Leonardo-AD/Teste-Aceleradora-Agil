import { nightList } from "../export.js"

export function removeTaskNight() {
    
    const removeButton = document.createElement('button')
    removeButton.setAttribute('id','delete-task')
    removeButton.textContent = 'delete'
    removeButton.className = 'material-symbols-outlined'

    removeButton.addEventListener('click', function(){

        let task = document.querySelector("#li-task-night");
        nightList.removeChild(task);
    })

    return removeButton;
}