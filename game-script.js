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
const mediumSize = 30;
const smallSize = 60;

//Remove children elements
function removeChildren() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

//Make any number of divs in container
function makeDivs(num, theme) {
    removeChildren();

    let area = num * num;

    let divWidth = `${500 / num}px `;
    let divHeight = `${500 / num}px `;

    container.style.gridTemplateRows = divWidth.repeat(num);
    container.style.gridTemplateColumns = divHeight.repeat(num);

    for (i = 0; i < area; i++) {
        let div = document.createElement('div')
        div.classList.add('div');
        container.appendChild(div);
        div.addEventListener('mouseover', () => div.classList.add(`set-${theme}-background`));
    }
}

//Change color theme
function changeColor(color) {
    let array = [container, big, medium, small];
    makeDivs(bigSize, color);
    for (const content of array) {
        for (i = 0; i < content.classList.length; i++) {
            const className = content.classList[i];
            if (className.startsWith('set')) {
                content.classList.remove(className);
            }
        }
        if (content !== container) {
            content.classList.add(`set-${color}-background`);
        } else if (content == container) {
            content.classList.add(`set-${color}-border`);
        }
    }
}

//Match size buttons to set color
function setTheme(newColor) {
    changeColor(newColor);
    big.addEventListener('click', () => makeDivs(bigSize, newColor));
    medium.addEventListener('click', () => makeDivs(mediumSize, newColor));
    small.addEventListener('click', () => makeDivs(smallSize, newColor));
}

//Add Hover effect
function hover() {
    let buttonArray = [red, yellow, blue, big, small, medium];
    for (const button of buttonArray) {
        button.addEventListener('mouseover', () => button.classList.add('hover'));
        button.addEventListener('mouseout', () => button.classList.remove('hover'));
        button.addEventListener('mousedown', () => button.classList.add('click'));
        button.addEventListener('mouseup', () => button.classList.remove('click'));
    }
}

//Call functions
setTheme('red');
yellow.addEventListener('click', () => setTheme('yellow'));
red.addEventListener('click', () => setTheme('red'));
blue.addEventListener('click', () => setTheme('blue'));
hover();