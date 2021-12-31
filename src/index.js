// import { formSubmit } from './toDoForm.js';
import { backgroundBlur } from './blurBackground.js';
import { toDo } from './todo.js';
import { createNextToDo } from './createToDos.js';

let projects = {'home':[]};
let currentProject = 'home';

let blur = backgroundBlur();

window.formSubmit = function formSubmit() {
    const title = document.querySelector('#form-title').value;
    const description = document.querySelector('#form-description').value;
    const date = document.querySelector('#form-date').value;
    const priority = document.querySelector('input[name="form-priority"]:checked').value;
    document.querySelector('#to-do-form').reset();
    document.querySelector('#to-do-form').style.display = 'none';
    blur.unblurBackground();

    let aToDo = toDo(title,description,date,priority);
    createNextToDo(aToDo, currentProject);
    projects[currentProject].push(aToDo);  
}

document.querySelector('#to-do-form').setAttribute('onsubmit', 'formSubmit();return false');

document.querySelector('#plus-button').addEventListener('click', () => {
    document.querySelector('#to-do-form').style.display = 'flex';
    blur.blurBackground();
});

document.addEventListener('click', (e) => {
    if (e.target && (e.target.id == 'x-icon')) {
        document.querySelector('#to-do-form').style.display = 'none';
        blur.unblurBackground();
    }
});
