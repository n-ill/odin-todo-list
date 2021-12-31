import { formSubmit } from './toDoForm.js';
import { backgroundBlur } from './blurBackground.js';

let blur = backgroundBlur();

document.querySelector('#submit-button').setAttribute('onsubmit', 'formSubmit(); return false;');

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

document.querySelector('.title').textContent = localStorage.getItem('title');