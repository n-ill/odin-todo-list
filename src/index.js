import { toDoForm } from './toDoForm.js';
import { backgroundBlur } from './blurBackground.js';

let aToDoForm = toDoForm();
let blur = backgroundBlur();
let formCreated = false;

document.querySelector('#plus-button').addEventListener('click', () => {
    if (!formCreated) {
        aToDoForm.createToDoForm();
        formCreated = true;
    } else {
        document.querySelector('#to-do-form').style.display = 'flex';
    }
    blur.blurBackground();
});

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'x-icon') {
        document.querySelector('#to-do-form').style.display = 'none';
        blur.unblurBackground();
    }
});

