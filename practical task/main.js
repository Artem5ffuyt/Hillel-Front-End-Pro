
// lesson_8
// ----------------------------------------------------

sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let summer_sports = sports.slice(5)
,winter_sports = sports.slice(0,5)
,fruits = winter_sports.splice(2,1).concat(summer_sports.splice(2,2));
 

console.log(`*** Winter sports ***`)
for (sport of winter_sports) {
    console.log(sport.join(`: `));
}

console.log(`*** Summer sports ***`)
for (sport of summer_sports) {
    console.log(sport.join(`: `));
}

console.log(`*** Fruits ***`)
for (fruit of fruits) {
    console.log(fruit.join(`: `));
}
// console.log(``summer_sports);
// console.log(fruits);

// let arr = [2,2,2,2,2,33,33,31];
// let arr2 = [`snooppp`]
// for (let i; i<arr.length; i++){

// }
// console.log(arr2)


// Copy of array

// let arr = [10,20,30];
// let arr_2 = [];

// for(let i=0; i<arr.length; i++){
//     arr_2[i] = arr[i];
// }
// console.log(arr_2);

// arr_2[0] = `dog`;
// console.log(arr, arr_2);

// Copy of array: second
// let arr = [10,20,30];
// let arr_2 = [`lion`, `parrot`];

// for(let i=0; i<arr.length; i++){
//     arr_2[arr_2.length] = arr[i]; // 10
// }
// console.log(arr_2);
// console.log(arr, arr_2);

// ...

// let arr = [10,20,30];
// let arr_2 = [...arr]; // [10,20,30]

// arr_2[0] = `dog`;
// console.log(arr, arr_2);

// let arr = [10,20,30];
// let arr_2 = [`cat`, `dog`, ...arr ]; // [`cat`, `dog`, 10,20,30]
// console.log(arr, arr_2);

// Array methods
//     push

// let arr = [10,20];
// arr.push(`cat`, true, 100);

// let arrOfNewItems = [`cat`, true, 100];
// for(let i=0; i<arrOfNewItems.length; i++){
//     arr[arr.length] = arrOfNewItems[i];
// }

// console.log( arr.push(`cat`, true) ); // 4
// console.log(arr);

//     unshift

// let arr = [10,20];
// arr.unshift(`cat`, true, 100);
// console.log( arr.unshift(`cat`, true, 100) ); // 5
// console.log(arr);

//     pop

// let arr = [10,20,30,40];
// // arr.pop();
// console.log( arr.pop() ); // 40
// console.log(arr);

//     shift

// let arr = [10,20,30,40];
// arr.shift();
// console.log(arr);

//     reverse

// let arr = [10,20,30,40,50];
// arr.reverse();

// console.log(arr);

//     concat

// let numbers = [10,20,30];
// let animals = [`cat`, `dog`];
// let users = [`student`, `lector`]

// [10,20,30,`cat`, `dog`];

// let newArr = numbers.concat(users, animals);

// console.log(newArr);

// let numbers = [10,20,30];
// let animals = [`cat`, `dog`];
// let users = [`student`, `lector`];

// let finalArr = numbers
//                 .concat(animals, users) // [10,20,30, `cat`, `dog`, `student`, `lector`]
//                 .reverse(); // [10,20,30, `cat`, `dog`, `student`, `lector`]

// finalArr.push(`HELLO`);
// console.log(finalArr);

//     slice

// let arr = [10,20,30,40,50,60,70];
// let arr_2 = arr.slice(2, -1);

// console.log(arr, arr_2);

//     splice

// let arr = [10,20,30,40,50,60,70]; // [10,20, `cat`, `dog`, 10000, true,60,70]
// let arr_2 = arr.splice(2, 0, `cat`, `dog`, 10000, true, false, `hello`);

// console.log(arr, arr_2);

//     join

// let arr = [10,20,30,40];
// let arrToString = arr.join(` `); // `10,20,30,40`

// console.log(arr);
// console.log(arrToString);

// let arr = [10,20,30,40];
// let LIs = arr.join(`</li><li>`);

// console.log(LIs); // 10</li><li>20</li><li>30</li><li>40
// document.write(`<ul><li>${LIs}</li></ul>`);

//     split

// let fullName = `Artem Kobzar`;
// let userInfo = fullName.split(`m Ko`);

// console.log(fullName);
// console.log(userInfo);

// let str = `first second third fourth`;

// let strArr = str.match(` `);
// console.log(strArr);

// for(let i=0; i<strArr.length; i++){
//     strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
// }

// lessons_7
// ------------------------------------------------------------------

// Array
// let arr = [34,12,-2,10,33,-71];
// for(let i = 0; i< arr.length;i++){
//    console.log(arr[i])
//    }

// let arr = [10, -20, 40, 59, -37, 100, -15, 34];
// console.log(arr);

// let minEl = maxEl = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i] < minEl){
//         minEl = arr[i];
//     }

//     if(arr[i] > maxEl){
//         maxEl = arr[i];
//     }
// }

// console.log(minEl, arr.indexOf(minEl));
// console.log(maxEl, arr.indexOf(maxEl));

// let indexOfMin = arr.indexOf(minEl);
// let indexOfMax = arr.indexOf(maxEl);

// let tempVal = arr[indexOfMin]; // -37
// arr[indexOfMin] = arr[indexOfMax];
// arr[indexOfMax] = tempVal;

// console.log(arr);


// let enterFirstName = ``
// ,enterLastName = ``
// ,capitalizedFirstName
// ,capitalizedLastName
// ,email
// ,yearOfBirth
// ,currentYear = new Date().getFullYear()
// ,age;

// do{
//     enterFirstName = prompt(`Enter your first name:`);
//         if(enterFirstName) enterFirstName = enterFirstName.trim()
// } while(!enterFirstName)

// do{
//      enterLastName = prompt(`Enter your last name:`);
//          if(enterLastName) enterLastName = enterLastName.trim()
// } while (!enterLastName) 

// do {
//     email = prompt(`Enter your email:`);
//    if(email) email = email.replaceAll(` `,``).toLowerCase();
// } while(!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`) || !email.includes(`.`) || email.indexOf(`.`) < email.indexOf(`@`) || email.startsWith(`.`) || email.endsWith(`.`))


// do{
//     yearOfBirth = prompt(`Enter your year of birth:`);
// if(yearOfBirth) yearOfBirth = parseInt(yearOfBirth.replaceAll(' ',''))
// } while(!yearOfBirth || yearOfBirth >= currentYear || isNaN(yearOfBirth))

// age = currentYear - yearOfBirth;

// capitalizedFirstName += enterFirstName[0].toUpperCase();
//  if (enterFirstName.includes(` `) || enterFirstName.includes(`-`)) {
//      for (let i=1; i<enterFirstName.length;i++){
//          if (enterFirstName[i-1] === ` ` || enterFirstName[i-1] === `-`) {capitalizedFirstName += enterFirstName[i].toUpperCase();
//          continue
//          } 
//         }
//         capitalizedFirstName += enterFirstName[i]
//              } else {
//                 capitalizedFirstName += enterFirstName.slice(1);
//              }


// capitalizedLastName += enterLastName[0].toUpperCase();
// if (enterLastName.includes(` `) || enterLastName.includes(`-`)) {
//     for (let i=1; i<userLastName.length;i++){
//         if (enterLastName[i-1] === ` ` || enterLastName[i-1] === `-`) {capitalizedLastName += enterLastName[i].toUpperCase();
//         continue
//         } 
//     capitalizedLastName += enterLastName[i]
//     } 
// } else {
//         capitalizedLastName += enterLastName.slice(1);
//     }




// document.write(`<ul>
//      <li> Full name: ${capitalizedFirstName} ${capitalizedLastName}</li>
//      <li> Email: ${email}</li>
//      <li> Age: ${age}</li>
//      </ul>`)


// Lesson _6 
// ----------------------------------------------------------
// Array methods
//     push
//     pop
//     shift
//     unshift
//     reverse
//     concat
//     slice
//     splice
//     join
//     split
//     indexOf
// regular expressions


// let userWords =prompt(`wwwwww`)
// if (userWords) {
// let words =3;
// let word = ``;
    
// for (let i = 1; i<= words; i++) {
// do{
//    word = prompt(`Enter Neme #${i}`)
// }while(!word || word.match(/\d/))
// }
// console.log(word)
// }
//    

// lessons_5
// ----------------------------------------------------------



// let client = 5;
// for(let i=1; i<=client; i++){
    //     console.log([i])
// }

// while

// let yearOfBirth = prompt(`Enter year`);

// // '1990' => true ~ false
// // 'Year: 1990' = > true ~ false
// // null => false
// // '' => false

// while(!yearOfBirth || isNaN(yearOfBirth)){
//     yearOfBirth = prompt(`Enter year`);
// }

// console.log(yearOfBirth);  // 'Year: 1990'

// let age = new Date().getFullYear() - yearOfBirth; // 2022 - 'Year: 1990'; => NaN;
// console.log(age);

// let userName = prompt(`Enter name`); // Anna Viktoria
// if(userName) userName = userName.trim();

// while(!userName){
//     userName = prompt(`Not valid data. Enter name`); 
//     if(userName) userName = userName.trim();
// }

// do/while
// let userName;
// do{
//     userName = prompt(`Enter name`); // Anna Viktoria
//     if(userName) userName = userName.trim();
// } while(!userName);

// console.log(userName);

// let str = `Hello word`
// let hasNamber = false;
// for( let i; i<str.length; i++){
//     let leater = str[i];
//     if(!isNaN(leater) && leater!==``){
//         hasNamber = true;
//         break;
//     }
// }
 

