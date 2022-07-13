const button = document.querySelector('.play');

button.addEventListener('mouseover', () => button.classList.add('hover'));
button.addEventListener('mouseout', () => button.classList.remove('hover'));
button.addEventListener('mousedown', () => button.classList.add('click'));
button.addEventListener('mouseup', () => button.classList.remove('click'));