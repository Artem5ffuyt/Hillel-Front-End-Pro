/*1) Перевірити чи має користувач доступ до сайту. Користувач вводить імя та пароль. Якщо імя 
та пароль ПОВНІСТЮ збігаються вивести сповіщення через alert, 
що доступ надано. Порівнюйте з цими даними - Name: 'admin' Password: 'qWeRty123'

        //   Pішення
let namme = prompt ('Введить логін');
let pasword = prompt ('Введить пароль');


if (namme === 'admin' && pasword === `qWeRty123`) {
 alert(`пароль вірний`)
} else {
    alert(`пароль або логін не вірний`)
}


/*2) Юзер задає число, що відповідає віку людини (роки). Додайте до цього числа слово рік, роки
 грамматично правильно, та виведіть сповіщення з результатом через alert

Приклад:

Юзер ввів 10. Сповіщення - Вам 10 років.

Юзер ввів 1. Сповіщення - Вам 1 рік.

   // Pішення

   let age = parseInt( prompt('Скільки вам років?'));
   if(age === 1 ) {
       alert(` Вам ${age} рік`);
   }
   if (age ==2) {alert(`Вам ${age} роки`);
   }
   if (age ==3) {alert(`Вам ${age} роки`);
   }
   if (age ==4) {alert(` Вам ${age} роки`);
   } 
   if (age >=5) {alert(` Вам ${age} рокiв`);
   }

   

/*3) Юзер вводить 4 числа. Знайти добуток найбільшого і найменшого числа із заданих.

   Приклад:
   
   Задано : 2 , -5, 10, 1. Рішення: -5 * 10 = -50. 
   
        //Ршшення

    
let prOne = prompt('ведить першу цифру');
let prTwo = prompt('ведить другу цифру');
let prSre = prompt('ведить третю цифру');
let prPho = prompt('ведить четверту цифру');

let a = Math.min(prOne, prTwo, prSre, prPho);
let b = Math.max(prOne, prTwo, prSre, prPho);

alert(`Рішення ${a} * ${b} = ${a*b}` );



/*4) Задачка з зірочкою.
Дана шахова дошка і фігура коня.
Юзер вводить початкову позицію коня в цифрах ( число1 ) (число2 )
Число1 - відповідає цифрам на картинці, Число2 - замість літер. (Було а5, стало 1 5. Було d4 
стало 4 4)
Юзер вводить будь-яку комбінацію руху коня на нову позицію (число1) (число2)
Вивести на екран true якщо кінь зі своє позиіції може перемістись на нову позицію або 
false, якщо не може. ( за шахматними правилами)
Приклад.
Юзер вказує позицію ( 1 , 1 )- Шахматний кінь знаходится в лівому нижньому кутку дошки. 
(чорна клітина).
Юзер вказує рух на клітину (3, 2). Виводимо true, адже кінь може туди переміститись.
Юзер вказує позицію ( 8, 8 )
Юзер вказує рух на клітину (7, 7). Виводимо false, бо кінь не може туди переміститись.
Підказка у додатку. Перевіряйте, щоб юзер не міг ввести цифри менше за 1 та більше за 8.
І не міг ввести букви.
Усі сповіщення виводити через alert.


    //Рішення

const initialX = Number (prompt(`Start position x. Max 8,min 0`))
const initialY = Number (prompt(`Start position y. Max 8,min 0`))



if (initialX < 1 || initialX > 8 || initialY < 1 || initialY > 8 ) {
    alert('Ви ввели не вірне значення')
}

const moveX = Number (prompt(`move position x`))
const moveY = Number (prompt(`move position y`))

if ( moveX < 1 || moveX > 8 || moveY < 1 || moveY > 8 ) {
    alert('Ви ввели не вірне значення')
}

const moveUpLong = (initialX + 2 === moveX && initialY - 1 === moveY) || (initialX + 1 === moveX && initialY - 2 === moveY) ||
                   (initialX + 2 === moveX && initialY + 1 === moveY) || (initialX + 1 === moveX && initialY + 2 === moveY)

const moveShort =  (initialX - 2 === moveX && initialY - 1 === moveY) || (initialX - 1 === moveX && initialY - 2 === moveY) ||
                   (initialX - 2 === moveX && initialY + 1 === moveY) || (initialX - 1 === moveX && initialY + 2 === moveY)


if ( moveUpLong || moveShort){
    alert(`Ход вірний`)
}    
 else{
    alert(`Ход НЕ ВІРНИЙ`)
}
*/



         //     $$$$$$$$$$ Lesson 1 $$$$$$$$$$$$$$$
                      //Food prices 🍎🍊🥝
/*Задача:
Вывести в консоль информацию о:
каждого продукта с учетом его количества и скидки;
финальную сумму по всем продуктам.
все подсчеты производим с помощью формул, а не просто выводим в консоль цифры)                      

         Входные данные:
         let captionString = `Food prices ≠ <ВЫВОД ТЕКУЩЕГО ДНЯ>.<ВЫВОД ТОЧНОГО МЕСЯЦА>.<ВЫВОД ТОЧНОГО ГОДА>`,
    
         apple=`🍎`,
         applePrice = 10,
         appleCount = 3,
         appleSalePercent = 7,
     
         orange = `🍊`,
         orangePrice = 12,
         orangeCount = 2,
         orangeSalePercent = 3,
     
         kiwi = `🥝`,
         kiwiPrice = 15,
         kiwiCount = 10,
         kiwiCountryPercent = 10;



         
let captionString = `Food prices for = `;
let date = new Date(),
    day = date.getMonth(),
    month = date.getMonth()+1,
    year = date.getFullYear();

const aplle =`🍎`;
const applePrice = 10;
const appleCount = 3;
const appleSalePercent = 7;

const resultApple =  applePrice * appleCount * appleSalePercent / 100;
const totalResultApple = applePrice * appleCount - resultApple ;


const orange = `🍊`;
const orangePrice = 12;
const orangeCount = 2;
const orangeSalePercent = 3;

const resultOrange = orangePrice * orangeCount * orangeSalePercent / 100;
const totalResultOrange = orangePrice * orangeCount - resultOrange;


const kiwi = `🥝`;
const kiwiPrice = 15;
const kiwiCount = 10;
const kiwiCountryPercent = 10;

const resultKiwi = kiwiPrice * kiwiCount * kiwiCountryPercent / 100;
const totalResultKiwi = kiwiPrice * kiwiCount + resultKiwi;

const finPraceFor = `Final price for`;

const totalResult = totalResultApple + totalResultOrange + totalResultKiwi;


console.log(`${captionString.replace('=', '-')} ${day }.${month}.${year} `)

console.log(`${finPraceFor} ${appleCount} ${aplle} = ${totalResultApple.toFixed()} UAH` )
console.log(`${finPraceFor} ${orangeCount} ${orange} = ${totalResultOrange.toFixed()} UAH`)
console.log(`${finPraceFor} ${kiwiCount} ${kiwi} = ${totalResultKiwi.toFixed()} UAH`)

console.log(`Final price for all products = ${totalResult.toFixed()} UAH`);
*/


/*let text = document.getElementById(`text`);
    text.style.color = "blue";
    text.style.backgroundColor = "green"
*/




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

 

  












