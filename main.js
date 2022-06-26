
const initialX = + prompt(`Start position x. Max 8,min 0`)
const initialY = + prompt(`Start position y. Max 8,min 0`)



if (initialX > 0 && initialX < 9  && initialY) {

}

const moveX = +prompt(`move position x`)
const moveY = +prompt(`move position y`)

const moveUpLong = (initialX + 2 === moveX) && (initialY - 1 === moveY)  || (initialY + 1 === moveY) || (initialY - 2 === moveY) ||
                   (initialX + 1 === moveX) && (initialY - 2 === moveY) || (initialY + 2 === moveY) || (initialY - 1 === moveY)

const moveShort = (initialX + 2 === moveX) && (initialY - 1 === moveY) || (initialY + 1 === moveY) || (initialY - 2 === moveY) ||
                  (initialX + 1 === moveX) && (initialY - 2 === moveY) || (initialY + 2 === moveY) || (initialY - 1 === moveY)


if (moveUpLong && moveShort === true){
    alert(`right move`)
} else{
    alert(`wrong move`)
}

console.log(moveX,moveY)


