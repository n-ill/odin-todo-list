import { events } from './events.js';
import { toDo } from './toDo.js';
import { createToDoDOM } from './createToDoDOM';

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

    let aToDo = toDo(title, description, date, priority);
    createToDoDOM(aToDo, currentProject);
    projects[currentProject].push(aToDo);
}

window.projectFormSubmit = function projectFormSubmit() {
    let newProjTitle = document.querySelector('#project-title').value.toLowerCase();

    if (!(newProjTitle in projects) && newProjTitle !== '') {
        let newProj = document.createElement('h2');
        newProj.className = 'sidebar-option';
        newProj.id = newProjTitle
        newProj.textContent = newProjTitle.toUpperCase();
        document.querySelector('#sidebar').appendChild(newProj);
        projects[newProjTitle] = [];
        console.log(projects);

        document.querySelector(`#${newProjTitle}`).addEventListener('click', () => {
            document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
                toDoDOM.style.display = 'none';
            })
            currentProject = newProjTitle;
            document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
                toDoDOM.style.display = 'grid';
            })
            document.querySelector('#main-area-title').textContent = currentProject.toUpperCase();
        });
    }

    document.querySelector('#new-project-form').reset();
    document.querySelector('#new-project-form').style.display = 'none';
}

document.querySelector('#new-project-form').setAttribute('onsubmit', 'projectFormSubmit();return false');
document.querySelector('#to-do-form').setAttribute('onsubmit', 'formSubmit();return false');

document.querySelector('#home').addEventListener('click', () => {
    document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
        toDoDOM.style.display = 'none';
    })
    currentProject = 'home';
    document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
        toDoDOM.style.display = 'grid';
    })
    document.querySelector('#main-area-title').textContent = currentProject.toUpperCase();
});