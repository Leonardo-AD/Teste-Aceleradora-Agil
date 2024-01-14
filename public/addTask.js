import { removeTaskDay } from "./removeTaskDay.js"
import { removeTaskNight } from "./removeTaskNight.js"

export function addTask(taskInput, taskTime, dayList, nightList) {
        
    if(taskInput.value != '' && taskInput.value != ' ' && taskTime.value == 'day'){
        
        const elementLi = document.createElement('li')
        elementLi.setAttribute('id','li-task-day')

        elementLi.innerHTML = 
            `
                ${taskInput.value} 
                <span id="check-task" class="material-symbols-outlined">check_box_outline_blank</span> 
                <span id="archive-task" class="material-symbols-outlined">archive</span>
                `

        dayList.appendChild(elementLi)
        elementLi.appendChild(removeTaskDay())
        taskInput.value = ""
    }
    else if(taskInput.value != '' && taskInput.value != ' ' && taskTime.value == 'night'){
       
        const elementLi = document.createElement('li')
        elementLi.setAttribute('id','li-task-night')

        elementLi.innerHTML = 
            `
                ${taskInput.value} 
                <span id="check-task" class="material-symbols-outlined">check_box_outline_blank</span> 
                <span id="archive-task" class="material-symbols-outlined">archive</span>
            `

        nightList.appendChild(elementLi)
        elementLi.appendChild(removeTaskNight())
        taskInput.value = ""
    }
    else if(taskInput.value != '' || taskInput.value != ' '){
        
        Swal.fire({
            title: "Não foi possível adicionar",
            text: "Digite uma tarefa e adicione em sua lista",
            icon: "error",
            background: "#E7E6FB"
        })
    }
}