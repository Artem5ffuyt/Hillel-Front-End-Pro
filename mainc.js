// введить цифри без коми))
let nuMe = prompt('Введить 4 числа');

let a = Math.min(...nuMe);
let b = Math.max(...nuMe); 

alert(`Рішення ${a} * ${b} = ${a*b}` );