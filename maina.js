/*
// -----Learn JS----//


// function

let array = [2,4,6,]
function summa(arr){
let sum =0;
  for(i=0; i < arr.length; i++){
  sum += arr[i];
  console.log(sum)
  }  
    
}
let summ = [1,1,1]
let summ2 = [5,1,6]
let summ3 = [1,4,3]
 summa(array);
 summa(summ);
 summa(summ2);
 summa(summ3);
 

 // Оброботчик событий
  
 function nameBut(){
 let counter = 0;
 counter++;
 console.log(counter)
 }


let counter =0;
function nameBut(el){
   counter ++;
   el.innerHTML = "hi" + counter;
 
  
  }

  function onInput(el){
console.log(el.value);
  }

  const text = document.getElementById(`text`)
  text.title = "gggg"
  console.log(text.title)
  text.style.color = "#red"



let entYouMame = prompt(`Enter you name`).trim();

let entWord = entYouMame.toLowerCase();

console.log(entWord.length)

let youAge = +prompt(`${entWord} Enter you age`)

let arrNumb = youAge;
console.log(youAge)

*/

let cheeseburger = 15;
let hamburger = 10;
let cheese =5;
let small =10;
let midle = 15;
let big = 20;
let ketchup = 2;
let mayonnaise =3;
let price = 0;

let promptHomCh = prompt(`hamburger or cheeseburger`)
let confChess;
let confPotato;
let promptPotato;

if(promptHomCh ==`hamburger`|| promptHomCh == " " ||promptHomCh == NaN ||promptHomCh == null ){
  price = hamburger 
  document.write
(`<h2 class = "list">Your order:
<ul>
  <li>Bulka 🍔: <>hamburger</li>
</ul>
<p>Price: $<${price}>`)
}
if(promptHomCh ==`cheeseburger`){
  confChess = confirm(`Would you like to add double cheese?`)
  confPotato = confirm(`Would you like potato?`) 
  
}


if(confChess) {
  price =  cheeseburger + cheese
  document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <Тип булки>cheeseburger</li>
	</ul>
  <p>Price: $<Фінальна ціна>${price}</p>`);
}else if(confChess == false ){
  price = cheeseburger
  document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <Тип булки>cheeseburger</li>
	</ul>
  <p>Price: $<Фінальна ціна>${price}</p>`);
}


if(confPotato) promptPotato = prompt(`Choose potato size: small/middle/big`)
if(promptPotato == `small`){
  price + small
  document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: <Тип булки>cheeseburger</li>
		<li>Potato 🍟: <Розмір картоплі>small</li>
	</ul>
  <p>Price: $<Фінальна ціна>${price} </p>`);
}





