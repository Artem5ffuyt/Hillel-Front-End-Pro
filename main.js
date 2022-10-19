


const square = document.querySelector(`#square`);
const getRandomIntInclusive = (min=0, max=255) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
const getRandomColor = () => {
        let colors = [];
        for(let i=0; i<=2; i++){
            colors.push(getRandomIntInclusive());
        };
        return `rgb(${colors.join(`,`)})`;
    };
setInterval(() => square.style.backgroundColor = getRandomColor(), 500);
square.style.left = 0;
square.style.top = 0;

const squareMoving = setInterval(() => {
    square.style.top = getRandomIntInclusive(0, document.body.clientHeight-square.offsetHeight) + `px`;
    square.style.left = getRandomIntInclusive(0, document.body.clientWidth-square.offsetWidth) + `px`;
}, 1000);
  


