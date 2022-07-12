//Initialize Variables
const body = document.querySelector('body');
const container = document.querySelector('.container');
//const btn = document.querySelector('.btn');
const colorBtns = document.querySelector('color-btns');
const sizeBtns = document.querySelector('size-btns');

const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');

const big = document.querySelector('.big');
const medium = document.querySelector('.medium');
const small = document.querySelector('.small');
const div = document.querySelector('div .div-hover');


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
function makeDivs(num, hoverClass) {
    removeChildren();

    let area = num * num;
    let divWidth = `${width / num}px `;
    let divHeight = `${height / num}px `;

    container.style.gridTemplateRows = divWidth.repeat(num);
    container.style.gridTemplateColumns = divHeight.repeat(num);

    for (i = 0; i < area; i++) {
        let div = document.createElement('div')
        div.classList.add('div');
        container.appendChild(div);
        div.addEventListener('mouseover', () => div.classList.add(hoverClass));
    }
}

//Prompt and make new grid size
/*function gridSize() {
    let answer = prompt("Enter a number between 1-100:");
    parseInt(answer);
    makeDivs(answer);
}*/

function changeColor(color) {
    let array = [container, big, medium, small];

    for (const div of array) {
        for (i = 0; i < div.classList.length; i++) {
            const className = div.classList[i];
            if (className.startsWith('set')) {
                div.classList.remove(className);
            }
        }

        if (div !== container) {
            div.classList.add(`set-${color}-background`);
        } else {
            div.classList.add(`set-${color}-border`);
        }
    }

    makeDivs(16, `set-${color}-background`);
}

//Call functions
makeDivs(16, 'set-red-background');
//btn.addEventListener('click', gridSize);
yellow.addEventListener('click', () => changeColor('yellow'));
red.addEventListener('click', () => changeColor('red'));
blue.addEventListener('click', () => changeColor('blue'));