

// Переменные
const naMe = "artem";
const age =36;
const message ="Hello my name Artem";



// Конкастинация строк
const stRing = "Hello my name Artem" + "I live in Ukraine , Kyiv";
let myAdress = "I live in Ukraine , Kyiv";
myAdress = "Yess"

console.log(message , myAdress);
console.log(naMe , age);
console.log( "Hello my name Artem" + "Ukraine , Kyiv");


console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"
const num = 1 + 1; 
console.log(num); 


// Шаблонные строки
const sttReng = `Hi ${stRing},and ${myAdress}`;
console.log(sttReng);


// Условные операторы ветвление
let arteMe;
let dewLop;

if (arteMe === dewLop){
arteMe = "ZP 10000$";
}

console.log(arteMe); 



//Масивы
const clients = ["rusia", "anton", "ksenia", "sasha"];
const cliEnts = ["Ananas", "Bojarka"];

//Переопределение
clients[0] = "sonya";
clients[1] = "roma";
console.log(clients);

//Методы масива  

//                    # Split И join #
const mar = "Mango";
console.log(mar.split("")); // ["M", "a", "n", "g", "o"]

const messsage = "JavaScript это интересно";
console.log(messsage.split(" ")); // ["JavaScript", "это", "интересно"]




//                   # Concat #
const clientMix = cliEnts.concat(clients);
console.log(clientMix); //['Ananas', 'Bojarka', 'sonya', 'roma', 'ksenia', 'sasha']

//                  # Splice удаление #
const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console.log(scores); // [4, 5]
console.log(deletedScores); // [1, 2, 3]


//                 # Splice замена # 
const languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 1, "Python");

console.log(languages); // ["C", "Python", "Java", "JavaScript"]
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]






//                 # Функции  #

function testFunktion() {
        const x = 10;
        const y = 15;
        console.log(x + y);  // 25
}
testFunktion();



function hello() {
    console.log(`Hello!!!`);   // Hello!!!
}
hello();


//             # Функции и аргументы #



function front(a , b) {
    console.log(a + b)
}
front(100,100);                 //200
front(50,50);                   //100
front(24,44);                    //




//               # retern 
//             Прерывание функции

function f4() {
    console.log(1);
    return;
    console.log(2);
    console.log(3);
}
f4();



function indexOfEmul(are , num) {
    for (let i = 0; i < are.lengh; i++) {
        if (arr[i] === num)return i;
    }
    return -1;
}
let result = indexOfEmul([22,33,44] , 45);
console.log(result);



let aa = 9;
aa = 10;







// Вывод данных введеных пользователем
function testJs() {
// document.write("запуск");
document.getElementById("bbq").append("запуск");
}

function tsta() {
    document.getElementById("tstaa").append("запустился111");
}

function divos() {
alert('нажмииииии');
}




