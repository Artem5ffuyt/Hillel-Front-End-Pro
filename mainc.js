
// введить цифри без коми))
let nuMe = prompt('Введить 4 числа');

let a = Math.min(...nuMe);
let b = Math.max(...nuMe); 

alert(`Рішення ${a} * ${b} = ${a*b}` ); 


/*
let prOne = prompt('ведить першу цифру');
let prTwo = prompt('ведить другу цифру');
let prSre = prompt('ведить третю цифру');
let prPho = prompt('ведить четверту цифру');

let a = Math.min(prOne, prTwo, prSre, prPho);
let b = Math.max(prOne, prTwo, prSre, prPho);

alert(`Рішення ${a} * ${b} = ${a*b}` );*/