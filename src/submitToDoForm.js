import { toDo } from './toDo.js';
import { createToDoDOM } from './createToDoDOM';

function submitToDoForm() {
    let currentProject = localStorage.getItem('currentProject');
    let projects = JSON.parse(localStorage.getItem('projects'));

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
        localStorage.setItem('projects', JSON.stringify(projects));
        console.log('after to do created:');
        console.log(currentProject);
        console.log(JSON.parse(localStorage.getItem('projects')));
    }

    document.querySelector('#to-do-form').setAttribute('onsubmit', 'formSubmit();return false');
}

export { submitToDoForm }