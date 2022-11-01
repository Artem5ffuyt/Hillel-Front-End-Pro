
const element = document.querySelector(`#element`);

const form = document.querySelector(`#form`);
const elementShape = document.querySelector (`#elementOne`);
const elementBg = document.querySelector(`#elementTwo`);

form.addEventListener(`submit`, e => {
    e.preventDefault();

    element.className = elementShape.value;
    element.style.background = elementBg.value;
})

  


