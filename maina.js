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



let promptHorC = prompt(`hamburger or cheeseburger`)
let confChess;
let confPotato;


if(promptHorC ==`hamburger`|| promptHorC == " " ||promptHorC == NaN ||promptHorC == null ){
document.write
(`<h2 class = "list">Your order:
<ul>
  <li>Bulka 🍔: <>hamburger</li>
</ul>
<p>Price: $<10>`)
}


if(promptHorC ==`cheeseburger`){
  confChess = confirm(`Would you like to add double cheese?`)
    if(confChess){
      document.write
      (`<h2 class = "list">Your order:
      <ul>
        <li>Bulka 🍔: <>cheeseburger</li>
      <p>Price: $<20>`)
    }
  confPotato = confirm(`Would you like potato?`) 
  
  document.write
(`<h2 class = "list">Your order:
<ul>
  <li>Bulka 🍔: <>cheeseburger</li>
<p>Price: $<15>`)
}


document.write (`</h2>`)

