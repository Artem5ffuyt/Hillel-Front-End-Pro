





// lessons_7
// ------------------------------------------------------------------

// Array
// let arr = [34,12,-2,10,33,-71];
// for(let i = 0; i< arr.length;i++){
//    console.log(arr[i])
//    }

let arr = [10, -20, 40, 59, -37, 100, -15, 34];
console.log(arr);

let minEl = maxEl = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] < minEl){
        minEl = arr[i];
    }

    if(arr[i] > maxEl){
        maxEl = arr[i];
    }
}

console.log(minEl, arr.indexOf(minEl));
console.log(maxEl, arr.indexOf(maxEl));

let indexOfMin = arr.indexOf(minEl);
let indexOfMax = arr.indexOf(maxEl);

let tempVal = arr[indexOfMin]; // -37
arr[indexOfMin] = arr[indexOfMax];
arr[indexOfMax] = tempVal;

console.log(arr);


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
 

