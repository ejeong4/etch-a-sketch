//Initialize Variables
const body = document.querySelector('body');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

//Get width and height of grid
let width = parseInt(getComputedStyle(container).width);
let height = parseInt(getComputedStyle(container).height);

//Remove children elements
function removeChildren() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

//Make any number of divs in container
function makeDivs(num) {
    removeChildren();

    let area = num * num;
    let divWidth = `${width / num}px `;
    let divHeight = `${height / num}px `;

    container.style.gridTemplateRows = divWidth.repeat(num);
    container.style.gridTemplateColumns = divHeight.repeat(num);

    for (i = 0; i < area; i++) {
        let i = document.createElement('div')
        i.classList.add('div');
        container.appendChild(i);
        i.addEventListener('mouseover', () => i.classList.add('div-hover'));
    }
}

//Prompt and make new grid size
function gridSize() {
    let answer = prompt("What size should the new grid be? (Type in a number 1-10)");
    parseInt(answer);
    makeDivs(answer);
}

//Call functions
makeDivs(16);
btn.addEventListener('click', gridSize);