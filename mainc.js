/*3) Юзер вводить 4 числа. Знайти добуток найбільшого і найменшого числа із заданих.

   Приклад:
   
   Задано : 2 , -5, 10, 1. Рішення: -5 * 10 = -50. 
   
        //Ршшення*/

    
let prOne = prompt('ведить першу цифру');
let prTwo = prompt('ведить другу цифру');
let prSre = prompt('ведить третю цифру');
let prPho = prompt('ведить четверту цифру');

let a = Math.min(prOne, prTwo, prSre, prPho);
let b = Math.max(prOne, prTwo, prSre, prPho);

alert(`Рішення ${a} * ${b} = ${a*b}` );