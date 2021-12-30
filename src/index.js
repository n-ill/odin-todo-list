import {createToDoForm} from './toDoForm.js';
import {blurBackground, unblurBackground} from './blurBackground.js';

document.querySelector('#plus-button').addEventListener('click', () => {
    createToDoForm();
    blurBackground(); 
});

