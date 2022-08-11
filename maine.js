
const hamburger = 10;
const cheeseburger = 15;
const doubleCheese =5;
const potatoS = 10;
const potatoM = 15;
const potatoB = 20;
const ketchup =2;
let Price = 0;
let conf;
let conf2;
let potatoPr;
let souceConfirm;
let request1 = prompt(`hamburger or cheeseburger`)
if (request1 == `hamburger` ||request1 == " " || request1 == "..." ||request1 == NaN ) {
    Price = hamburger 
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <>hamburger</li>
	</ul>
    <p>Price: $<> ${Price}</p>`);
} if (request1 == null){
    Price = hamburger 
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <>hamburger</li>
	</ul>
    <p>Price: $<> ${Price}</p>`);

    
}
if (request1 == `cheeseburger`) {
 let conf = confirm( `Would you like to add double cheese?`) 
 if (conf){
    let conf2 = confirm(`Would you like potato?`)
    if(conf2) {
          let potatoPr = prompt(`Choose potato size: small/middle/big`)
        if(potatoPr == `small` || potatoPr == " " || potatoPr == "..." ||potatoPr == NaN || potatoPr == null) {
    Price = cheeseburger  + doubleCheese +  potatoS
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <>cheeseburger</li>
		<li>Potato 🍟: <small> ${potatoS}</li>
	</ul>
    <p>Price: $<Фінальна ціна>${Price} </p>`); 
} if (potatoPr == `middle`){
    Price = cheeseburger + doubleCheese + potatoM
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <>cheeseburger</li>
		<li>Potato 🍟: <small></li>
	</ul>
    <p>Price: $<>${Price}</p>`);


}if (potatoPr == `big`){
    Price = cheeseburger + doubleCheese + potatoB
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <>cheeseburger</li>
		<li>Potato 🍟: <small></li>
	</ul>
    <p>Price: $<Фінальна ціна>${Price}</p>`);
    let souceConfirm = confirm (`Would you like sauce?`)
    if(souceConfirm){
    let soucePronpt = prompt(`Choose sauce: ketchup/mayonnaise`)
    if(soucePronpt == `ketchup` ||soucePronpt == " " || soucePronpt == "..." ||soucePronpt == NaN || soucePronpt == null){
        Price = cheeseburger + 2
        document.write(`<h2>Your order:</h2>
        <ul>
            <li>Bulka 🍔: <>cheeseburger</li>
            <li>Potato 🍟: <Розмір картоплі> </li>
            <li>Sauce 🧂: <>ketchup</li>
        </ul>
        <p>Price: $<Фінальна ціна>${Price}</p>`);
    }if (soucePronpt == `mayonnaise`) {
        Price = cheeseburger + 3
        document.write(`<h2>Your order:</h2>
        <ul>
            <li>Bulka 🍔: <>cheeseburger</li>
            <li>Potato 🍟: <Розмір картоплі> </li>
            <li>Sauce 🧂: <>ketchup</li>
        </ul>
        <p>Price: $<Фінальна ціна>${Price}</p>`);
    }  
}}
}}}