function createNextToDo(currentToDo, currentProject) {
    let toDo = document.createElement('div');
    toDo.className = currentProject + ' to-do';

    let priority = document.createElement('div');
    priority.className = 'todo-prio';
    let title = document.createElement('div');
    title.className = 'title';
    let description = document.createElement('div');
    description.className = 'description';
    let date = document.createElement('div');
    date.className = 'date';

    if (currentToDo.getPriority() == 'low') {
        priority.className = 'todo-prio low-prio';
    }
    if (currentToDo.getPriority() == 'medium') {
        priority.className = 'todo-prio med-prio';
    }
    if (currentToDo.getPriority() == 'high') {
        priority.className = 'todo-prio high-prio';
    }

    title.textContent = currentToDo.getTitle();
    description.textContent = currentToDo.getDescription();
    date.textContent = currentToDo.getDueDate();

    toDo.appendChild(title);
    toDo.appendChild(description);
    toDo.appendChild(date);
    toDo.appendChild(priority);

    document.querySelector('#main-area').appendChild(toDo);
}

export { createNextToDo }