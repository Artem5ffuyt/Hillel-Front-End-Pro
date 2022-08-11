const   cheeseburger = 15,
        hamburger = 10,
        cheese = 5,
        small = 10,
        midle = 15,
        big = 20,
        ketchup = 2,
        mayonnaise = 3;

let price = 0;

let promptHomCh = prompt(`hamburger or cheeseburger`)
if(promptHomCh === `cheeseburger`){
    price += cheeseburger;

    confChess = confirm(`Would you like to add double cheese?`);
    if(confChess) price += cheese;
} else{
    promptHomCh = hamburger;
    price += hamburger;
}

let confPotato = confirm(`Would you like potato?`);
let promptPotato;
if(confPotato){
    promptPotato = prompt(`Choose potato size: small/middle/big`);

    if(promptPotato === `middle`){
        price += midle;
    } else if(promptPotato === `big`){
        price += big;
    } else{
        promptPotato = small;
        price += small;
    }
}

confSouse = confirm(`Would you like sauce?`);
let promSouce;
if(confSouse){
   promSouce = prompt(`Choose sauce: ketchup/mayonnaise`)
   if (promSouce === `ketchup`){
    price += ketchup;
   }else if (promSouce === `mayonnaise`) {
    price += mayonnaise;
   } else{
    promSouce = ketchup;
    price += ketchup;
   }
}

document.write
(`<h2>Your order:</h2>
<ul>
    <li>Bulka 🍔: ${promptHomCh}</li>
    ${confPotato ? `<li>Potato 🍟: ${promptPotato}</li>` : ``}
    ${confSouse  ? `<li>Sauce 🧂: ${ promSouce }</li>` : ``}
</ul>
<p>Price: $${price} </p>`);