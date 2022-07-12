//Initialize Variables
const body = document.querySelector('body');
const container = document.querySelector('.container');

const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');

const big = document.querySelector('.big');
const medium = document.querySelector('.medium');
const small = document.querySelector('.small');

const bigSize = 16;
const mediumSize = 50;
const smallSize = 80;


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

//Change color theme
function changeColor(color) {
    let array = [container, big, medium, small];
    makeDivs(bigSize, `set-${color}-background`);
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
}

//Call functions
makeDivs(bigSize, 'set-red-background');
yellow.addEventListener('click', () => changeColor('yellow'));
red.addEventListener('click', () => changeColor('red'));
blue.addEventListener('click', () => changeColor('blue'));

medium.addEventListener('click', () => makeDivs(mediumSize, 'set-red-background'));
small.addEventListener('click', () => makeDivs(smallSize, 'set-red-background'));