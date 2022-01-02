function events() {
    document.querySelector('#plus-button').addEventListener('click', () => {
        document.querySelector('#to-do-form').style.display = 'flex';
    });

    document.querySelector('#x-icon').addEventListener('click', () => {
        document.querySelector('#to-do-form').style.display = 'none';
    });

    document.querySelector('#add-project-button').addEventListener('click', () => {
        document.querySelector('#new-project-form').style.display = 'block';
    })

    document.querySelector('#project-cancel-button').addEventListener('click', () => {
        document.querySelector('#new-project-form').style.display = 'none';
    })
}

export { events }