import { createToDoForm } from './toDoForm.js';
import { blurBackground, unblurBackground } from './blurBackground.js';

let formCreated = false;

document.querySelector('#plus-button').addEventListener('click', () => {
    if (!formCreated) {
        createToDoForm();
        formCreated = true;
    } else {
        document.querySelector('#to-do-form').style.display = 'flex';
    }
    blurBackground();
});

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'x-icon') {
        document.querySelector('#to-do-form').style.display = 'none';
        unblurBackground();
    }
});

