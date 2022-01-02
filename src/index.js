import { events } from './events.js';
import { submitToDoForm } from './submitToDoForm.js';
import { projectFormSubmit } from './projectFormSubmit.js'

localStorage.clear();

let projects = { 'home': [] };
let currentProject = 'home';
localStorage.setItem('currentProject', currentProject);
localStorage.setItem('projects', JSON.stringify(projects));

console.log('startup values:');
console.log(localStorage.getItem('currentProject'));
console.log(JSON.parse(localStorage.getItem('projects')));

events();
submitToDoForm();
projectFormSubmit();

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