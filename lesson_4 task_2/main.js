let pattyType = prompt(`Would you like a hamburger or a cheeseburger?`)
    ,orderSum = 0;

if (pattyType === `hamburger`) {
    orderSum +=10;
    } else if (pattyType === `cheeseburger`) {
    orderSum +=15;
    let doubleCheese = confirm(`Would you like to add double cheese?`);
    if (doubleCheese) {
        orderSum += 5;
    } 
    } else {
        pattyType = `hamburger`;
        orderSum = 10;
    }

let potato = confirm(`Would you like potato?`)
    ,potatoSize;

if (potato) {
    potatoSize = prompt(`Choose potato size: small/middle/big`);
    if (potatoSize === `middle`) {
        orderSum += 15;
    } else if (potatoSize === `big`) {
        orderSum += 20;
    } else {
        orderSum += 10;
        potatoSize = `Small`
    }
}

let sauce = confirm(`Would you like sauce?`)
    ,sauceType
    ;

if(sauce) {
    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`);
    if (sauceType === `mayonnaise`) {
        orderSum += 3
    } else{
        orderSum += 2
        sauceType = `Ketchup`
    }
}

document.write(`<h2>Your order:</h2>
    <ul>
    <li>Patty 🍔: ${pattyType[0].toUpperCase() + pattyType.slice(1)}</li>
    `);
        
if (potato){
    document.write(`<li>Potato 🍟: ${potatoSize[0].toUpperCase() + potatoSize.slice(1)}</li>`)
}; 

if (sauce){
    document.write(`<li>Sauce 🧂: ${sauceType[0].toUpperCase() + sauceType.slice(1)} </li>
        </ul>`)
};  

document.write(`<p>Price: $${orderSum}</p>`);