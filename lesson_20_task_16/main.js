
const block = document.querySelector(`#block`)
const boom = document.querySelector(`#bams`);

const initHeight = block.offsetHeight;
const initWidth = block.offsetWidth;
const initBorderWidth = block.offsetHeight - block.scrollHeight;

block.style.left = 0;
block.style.top = 0;

const getRandomIntInclusive = (min = 0, max = 255) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    
const getRandomColor = () => {
    let colorDigits = [];
    
    for (let i = 0; i <= 2; i++) {
        colorDigits.push(getRandomIntInclusive())      
    }
    
    return `rgb(${colorDigits.join(`,`)})`
}

const STEP = 10;

const movingRight = () => {
    block.style.left = parseInt(block.style.left) + STEP + `px`;
    if(getBlockRightCoordinate() >= getBodyWidth()){
        block.style.left = parseInt(block.style.left) - STEP*2 + `px`;
        bams();
    }
}

const movingLeft = () => {
    block.style.left = parseInt(block.style.left) - STEP + `px`;
    if(block.offsetLeft <= 0){
        block.style.left = parseInt(block.style.left) + STEP*2 + `px`;
        bams();
    }
}

const movingDown = () => {
    block.style.top = parseInt(block.style.top) + STEP + `px`;
    if(getBlockBottomCoordinate() >= getBodyHeight()){
        block.style.top = parseInt(block.style.top) - STEP*2 + `px`;
        bams();
    }
}

const movingUp = () => {
    block.style.top = parseInt(block.style.top) - STEP + `px`;
    if(block.offsetTop <= 0){
        block.style.top = parseInt(block.style.top) + STEP*2 + `px`;
        bams();
    }
}

const jump = () => {
    block.classList.add(`jump`);
    setTimeout(() => block.classList.remove(`jump`), 1000);
}

const crouch = () => {
    block.style.height = block.offsetHeight * 0.6 + `px`;
    block.style.width = block.offsetWidth * 0.75 + block.offsetWidth + `px`;
    block.style.borderBottomWidth = (block.offsetHeight - block.scrollHeight) * 0.6 + `px`;

    setTimeout(() => {
        block.style.height = initHeight + `px`;
        block.style.width = initWidth + `px`;
        block.style.borderBottomWidth = initBorderWidth + `px`;
        
        return
    }, 1000);
    
}

const bams = () => {
    // block.innerHTML = `БУЦЬ`;
    // setTimeout(() => block.innerHTML = ``, 1000);
    boom.classList.add(`visible`);
    
    let changecolor = setInterval(() => {
        boom.style.color = getRandomColor()
    }, 400);

    setTimeout(() => {
        boom.classList.remove(`visible`);
        clearInterval(changecolor);
    }, 1000);
}

const ACTIONS = {
    37: movingLeft,
    38: movingUp,
    39: movingRight,
    40: movingDown,
    17: crouch,
    32: jump
}

const getBodyWidth = () => document.body.offsetWidth;
const getBodyHeight = () => document.body.offsetHeight;
const getBlockRightCoordinate = () => block.offsetLeft+block.offsetWidth;
const getBlockBottomCoordinate = () => block.offsetTop+block.offsetHeight;

document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());

