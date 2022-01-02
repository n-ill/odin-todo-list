function events() {
    document.querySelector('#plus-button').addEventListener('click', () => {
        document.querySelector('#to-do-form').style.display = 'flex';
    });

    document.querySelector('#x-icon').addEventListener('click', () => {
        document.querySelector('#to-do-form').style.display = 'none';
    });
}

export { events }