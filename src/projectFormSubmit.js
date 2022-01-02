function projectFormSubmit() {
    let projects = JSON.parse(localStorage.getItem('projects'));
    let currentProject = localStorage.getItem('currentProject');

    window.projFormSubmit = function projFormSubmit() {
        let newProjTitle = document.querySelector('#project-title').value.toLowerCase();

        console.log('before new project created:');
        console.log(currentProject);
        console.log(projects);

        if (!(newProjTitle in projects) && newProjTitle !== '') {
            let newProj = document.createElement('h2');
            newProj.className = 'sidebar-option';
            newProj.id = newProjTitle;
            newProj.textContent = newProjTitle.toUpperCase();
            document.querySelector('#sidebar').appendChild(newProj);
            projects.newProjTitle = [];
            console.log('after new project created:');
            console.log(currentProject);
            console.log(projects);
            localStorage.setItem('projects', JSON.stringify(projects));

            document.querySelector(`#${newProjTitle}`).addEventListener('click', () => {
                document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
                    toDoDOM.style.display = 'none';
                })
                currentProject = newProjTitle;
                localStorage.setItem('currentProject', currentProject);
                document.querySelectorAll(`.${currentProject}`).forEach(toDoDOM => {
                    toDoDOM.style.display = 'grid';
                })
                document.querySelector('#main-area-title').textContent = currentProject.toUpperCase();
            });
        }

        document.querySelector('#new-project-form').reset();
        document.querySelector('#new-project-form').style.display = 'none';
    }
    document.querySelector('#new-project-form').setAttribute('onsubmit', 'projFormSubmit();return false');
}

export { projectFormSubmit }