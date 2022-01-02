import { events } from './events.js';
import { submitToDoForm } from './submitToDoForm.js';
// import { toDo } from './toDo.js';
// import { createToDoDOM } from './createToDoDOM';
// import { formSubmit } from './formSubmit.js'

let projects = { 'home': [] };
let currentProject = 'home';
localStorage.setItem('currentProject', currentProject);
localStorage.setItem('projects', JSON.stringify(projects));

events();
submitToDoForm();

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