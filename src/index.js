import { events } from './events.js';
import { toDo } from './toDo.js';
import {createToDoDOM} from './createToDoDOM';

let projects = { 'home': [] };
let currentProject = 'home';
events();

window.formSubmit = function formSubmit() {
    const title = document.querySelector('#form-title').value;
    const description = document.querySelector('#form-description').value;
    const date = document.querySelector('#form-date').value;
    const priority = document.querySelector('input[name="form-priority"]:checked').value;
    document.querySelector('#to-do-form').reset();
    document.querySelector('#to-do-form').style.display = 'none';

    let aToDo = toDo(title,description,date,priority);
    createToDoDOM(aToDo, currentProject);
    if (!(currentProject in projects)) {
        projects[currentProject] = [];
    }
    projects[currentProject].push(aToDo);  
}
document.querySelector('#to-do-form').setAttribute('onsubmit', 'formSubmit();return false');

document.querySelectorAll('.sidebar-option').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
            toDoDOM.style.display = 'none';
        })
        currentProject = item.id;
        document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
            toDoDOM.style.display = 'grid';
        })
        document.querySelector('#main-area-title').textContent = currentProject.toUpperCase();
    })
});