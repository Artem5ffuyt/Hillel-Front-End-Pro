/*1. Юзер вводить 2 цілих числа x та y. Вивести на екран всі числа
 від x до y включно.


const x = +prompt(`Введите число x`);
const y= +prompt(`Введите число y`);

const range = (min, max) => {
const length = max - min + 1;
const newArr = new Array(length);
for (let i=0; i < length; i++) { 
      newArr[i] = min + i;
}
return newArr;
} 
alert(range(x,y).toString());






// 2. Юзер вводить розмір масиву. Заповнити новостворений масив рандомними
//  (ЦІЛИМИ) значеннями та порахувати їх середнє арифметичне. Вивести цей 
//  масив на екран, та результат розрахунку.

 let num = parseInt(prompt(`Введить цифру`))
 let newArr = new Array(num)

 
 let sum =0;
  for(i=0; i<newArr.length; i++){
    newArr[i] = Math.ceil(Math.random() * 100)
    sum += newArr[i]
}
let b = sum /num;


alert(`${newArr} Середнє арифметичне значення ${b}`)

*/







/*3. Юзер вводить розмір массиву. Після цього юзер вводить один за одним значення в масив.

Вивести створений масив на екран.

 Знайти мінімальний і максимальний елементи створеного масиву і поміняти їх місцями.
 Вивести результат: Мінімальний = . Максимальний =. Новий масив =. */

let nums = parseInt(prompt(`Введить розмір масиву`))
let nuwArr = new Array(nums)

let sumArr = prompt(`Введить значення  масиву`) 
for( i=0; i<=nuwArr.length; i++){
    sumArr[i] *=2

    console.log(sumArr[i])
} 

 function fubNav(sumArr){
    sumArr.Math.ceil(Math.max())

    return(sumArr)

    
  
 }
 let e = [i]
 alert(e)
    

 

 

 

  



 
 

 
 
