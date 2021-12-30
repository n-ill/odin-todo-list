import xIcon from './x-icon.png';

const toDoForm = () => {
    const gridContainer = document.querySelector('#grid-container');

    let toDoForm = document.createElement('form');
    toDoForm.id = 'to-do-form';
    toDoForm.style.gridRow = '3/4';
    toDoForm.style.gridColumn = '3/4';

    let closeX = document.createElement('img');
    closeX.src = xIcon;
    closeX.className = 'icon';
    closeX.id = 'x-icon'

    let title = document.createElement('input');
    title.className = 'form-text-input';
    title.setAttribute('type', 'text');
    title.placeholder = 'Title...';
    title.required = true;

    let description = document.createElement('textarea');
    description.className = 'form-text-input';
    description.placeholder = 'Description (optional)...';
    description.style.resize = 'none';
    description.rows = '3';

    let date = document.createElement('input')
    date.setAttribute('type', 'date');
    date.className = 'form-text-input';
    date.style.marginBottom = '40px';
    date.required = true;

    let prioContainer = document.createElement('div');
    prioContainer.id = 'priority-container';
    prioContainer.style.display = 'flex';
    prioContainer.style.gap = '10px';

    let lowPrioText = document.createElement('div');
    lowPrioText.textContent = 'LOW:';
    lowPrioText.style.color = '#4CA64C';

    let lowPrio = document.createElement('input');
    lowPrio.setAttribute('type', 'radio');
    lowPrio.name = 'priority';
    lowPrio.id = 'low-priority';
    lowPrio.required = true;

    let medPrioText = document.createElement('div');
    medPrioText.textContent = 'MEDIUM:';
    medPrioText.style.color = '#FFFF4C';

    let medPrio = document.createElement('input');
    medPrio.setAttribute('type', 'radio');
    medPrio.name = 'priority';
    medPrio.id = 'medium-priority';

    let highPrioText = document.createElement('div');
    highPrioText.textContent = 'HIGH:';
    highPrioText.style.color = '#FF4C4C';

    let highPrio = document.createElement('input');
    highPrio.setAttribute('type', 'radio');
    highPrio.name = 'priority';
    highPrio.id = 'high-priority';

    prioContainer.appendChild(lowPrioText);
    prioContainer.appendChild(lowPrio);
    prioContainer.appendChild(medPrioText);
    prioContainer.appendChild(medPrio);
    prioContainer.appendChild(highPrioText);
    prioContainer.appendChild(highPrio);

    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');

    const createToDoForm = () => {
        toDoForm.appendChild(closeX);
        toDoForm.appendChild(title);
        toDoForm.appendChild(description);
        toDoForm.appendChild(date);
        toDoForm.appendChild(prioContainer);
        toDoForm.appendChild(submitButton);

        gridContainer.appendChild(toDoForm);
    }

    return { createToDoForm }
}

export { toDoForm }