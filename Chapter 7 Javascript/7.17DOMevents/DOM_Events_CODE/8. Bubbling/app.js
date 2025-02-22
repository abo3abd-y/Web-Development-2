const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
    container.style.backgroundColor = makeRandColor()
    e.stopPropagation() // this stops event bubbling; it will do its thing and wont be affected by other outside event bubbling
})
container.addEventListener('click', () => { // event bubbling because container is the outer one and button is inside
    container.classList.add('hide')
})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}