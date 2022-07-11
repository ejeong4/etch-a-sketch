const container = document.querySelector('.container');
let width = parseInt(getComputedStyle(container).width);
let height = parseInt(getComputedStyle(container).height);

const num = 16;

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

makeDivs(num);