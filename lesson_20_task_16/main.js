
const block = document.querySelector(`#block`);
const boom = document.querySelector(`#bams`);

block.style.left = 0;
block.style.top = 0;

const mineHeight = block.offsetHeight;
const mineWidth = block.offsetWidth;
const mineBorderWidth = block.offsetHeight - block.scrollHeight;

const randomMineInclusive = (min = 0, max = 255) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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

const down = () => {
    block.style.height = block.offsetHeight * 0.6 + `px`;
    block.style.width = block.offsetWidth * 0.75 + block.offsetWidth + `px`;
    block.style.borderBottomWidth = (block.offsetHeight - block.scrollHeight) * 0.6 + `px`;

    setTimeout(() => {
        block.style.height = mineHeight + `px`;
        block.style.width = mineWidth + `px`;
        block.style.borderBottomWidth = mineBorderWidth + `px`;
        
        return
    }, 1000);
    
}

const bams = () => {
  boom.classList.add(`transformation`);
  setTimeout(() => {
  boom.classList.remove(`transformation`);
  clearInterval();
    }, 1000);
}

const ACTIONS = {
    37: movingLeft,
    38: movingUp,
    39: movingRight,
    40: movingDown,
    17: down,
    32: jump
}

document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());

const getBodyWidth = () => document.body.offsetWidth;
const getBodyHeight = () => document.body.offsetHeight;
const getBlockRightCoordinate = () => block.offsetLeft+block.offsetWidth;
const getBlockBottomCoordinate = () => block.offsetTop+block.offsetHeight;



