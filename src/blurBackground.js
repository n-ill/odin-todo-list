function blurBackground() {
    let aboveFormRow = document.createElement('div');
    aboveFormRow.id = 'above-form-row';
    aboveFormRow.style.gridRow = '2/3';
    aboveFormRow.style.gridColumn = '2/5';

    let belowFormRow = document.createElement('div');
    belowFormRow.id = 'below-form-row';
    belowFormRow.style.gridRow = '4/5';
    belowFormRow.style.gridColumn = '2/5';

    let leftFormColumn = document.createElement('div');
    leftFormColumn.id = 'left-form-column';
    leftFormColumn.style.gridRow = '2/5';
    leftFormColumn.style.gridColumn = '2/3';

    let rightFormColumn = document.createElement('div');
    rightFormColumn.id = 'right-form-column';
    rightFormColumn.style.gridRow = '2/5';
    rightFormColumn.style.gridColumn = '4/5';

    document.querySelector('#plus-button-container').style.filter = 'blur(5px)';
    document.querySelector('#header').style.filter = 'blur(5px)';
    document.querySelector('#sidebar').style.filter = 'blur(5px)';
    aboveFormRow.style.filter = 'blur(5px)';
    belowFormRow.style.filter = 'blur(5px)';
    leftFormColumn.style.filter = 'blur(5px)';
    rightFormColumn.style.filter = 'blur(5px)';
}

function unblurBackground() {
    document.querySelector('#plus-button-container').style.filter = 'blur(0px)';
    document.querySelector('#header').style.filter = 'blur(0px)';
    document.querySelector('#sidebar').style.filter = 'blur(0px)';
    document.querySelector('#above-form-row').style.filter = 'blur(0px)';
    document.querySelector('#below-form-row').style.filter = 'blur(0px)';
    document.querySelector('#above-form-column').style.filter = 'blur(0px)';
    document.querySelector('#below-form-column').style.filter = 'blur(0px)';
}

export { blurBackground, unblurBackground }