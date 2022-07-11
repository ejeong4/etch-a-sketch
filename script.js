const body = document.querySelector('body');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let width = parseInt(getComputedStyle(container).width);
let height = parseInt(getComputedStyle(container).height);

const initialNum = gridSize();

function makeDivs(num) {
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

function gridSize() {
    let answer = prompt("What size should the new grid be? (Type in a number 1-10)");
    parseInt(answer);
    return answer;
}

makeDivs(initialNum);
btn.addEventListener('click', gridSize);