// let client = 5;
// for(let i=1; i<=client; i++){
    

//     console.log([i])

// }

// let str = `Hello word`
// let hasNamber = false;
// for( let i; i<str.length; i++){
//     let leater = str[i];
//     if(!isNaN(leater) && leater!==``){
//         hasNamber = true;
//         break;
//     }
// }
 


// Lesson _6 
// regular expressions
let userWords =prompt(`wwwwww`)
if (userWords) {
let words =3;
let word = ``;
    
for (let i = 1; i<= words; i++) {
do{
   word = prompt(`Enter Neme #${i}`)
}while(!word || word.match(/\d/))
}
console.log(word)
}







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


