let enterFirstName = ``
,enterLastName = ``
,capitalizedFirstName
,capitalizedLastName
, email

do{
    enterFirstName = prompt(`Enter your first name:`);
        if(enterFirstName) enterFirstName = enterFirstName.trim()
} while(!enterFirstName)

do{
     enterLastName = prompt(`Enter your last name:`);
         if(enterLastName) enterLastName = enterLastName.trim()
} while (!enterLastName) 



    capitalizedFirstName += enterFirstName[0].toUpperCase();
 if (enterFirstName.includes(` `) || enterFirstName.includes(`-`)) {
     for (let i=1; i<enterFirstName.length;i++){
         if (enterFirstName[i-1] === ` ` || enterFirstName[i-1] === `-`) {capitalizedFirstName += enterFirstName[i].toUpperCase();
         continue
         } 
        }
        capitalizedFirstName += enterFirstName[i]
             } else {
                capitalizedFirstName += enterFirstName.slice(1);
             }


capitalizedLastName += enterLastName[0].toUpperCase();
if (userLastName.includes(` `) || enterLastName.includes(`-`)) {
    for (let i=1; i<userLastName.length;i++){
        if (enterLastName[i-1] === ` ` || enterLastName[i-1] === `-`) {capitalizedLastName += enterLastName[i].toUpperCase();
        continue
        } 
    capitalizedLastName += enterLastName[i]
    } 
} else {
        capitalizedLastName += userLastName.slice(1);
    }

do {
     email = prompt(`Enter your email:`);
    if(email) email = email.replaceAll(` `,``).toLowerCase();
 } while(!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`) || !email.includes(`.`) || email.indexOf(`.`) < email.indexOf(`@`) || email.startsWith(`.`) || email.endsWith(`.`))





        console.log(enterFirstName)
        console.log(enterLastName)
// while(!enterFerstName || enterFerstName.startsWith(`@`) || enterFerstName.includes(`@`)){
//     let enterFerstName = prompt(`enter your first name`)
// }







// let userFirstName
//     ,capitalizedFirstName = ``
//     ,userLastName
//     ,capitalizedLastName = ``
//     ,email
//     ,yearOfBirth
//     ,currentYear = new Date().getFullYear()
//     ,age;

// do{
//     userFirstName = prompt(`Enter your first name:`);
//     if(userFirstName) userFirstName = userFirstName.trim()
// } while(!userFirstName)

// do{
//     userLastName = prompt(`Enter your last name:`);
//     if(userLastName) userLastName = userLastName.trim()
// } while (!userLastName) 

// do {
//     email = prompt(`Enter your email:`);
//     if(email) email = email.replaceAll(` `,``).toLowerCase();
// } while(!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`) || !email.includes(`.`) || email.indexOf(`.`) < email.indexOf(`@`) || email.startsWith(`.`) || email.endsWith(`.`))

// do{
//     yearOfBirth = prompt(`Enter your year of birth:`);
//     if(yearOfBirth) yearOfBirth = parseInt(yearOfBirth.replaceAll(' ',''))
// } while(!yearOfBirth || yearOfBirth >= currentYear || isNaN(yearOfBirth))

// age = currentYear - yearOfBirth;

// capitalizedFirstName += userFirstName[0].toUpperCase();
// if (userFirstName.includes(` `) || userFirstName.includes(`-`)) {
//     for (let i=1; i<userFirstName.length;i++){
//         if (userFirstName[i-1] === ` ` || userFirstName[i-1] === `-`) {capitalizedFirstName += userFirstName[i].toUpperCase();
//         continue
//         } 
//     capitalizedFirstName += userFirstName[i]
//     } 
// } else {
//         capitalizedFirstName += userFirstName.slice(1);
//     }

// capitalizedLastName += userLastName[0].toUpperCase();
// if (userLastName.includes(` `) || userLastName.includes(`-`)) {
//     for (let i=1; i<userLastName.length;i++){
//         if (userLastName[i-1] === ` ` || userLastName[i-1] === `-`) {capitalizedLastName += userLastName[i].toUpperCase();
//         continue
//         } 
//     capitalizedLastName += userLastName[i]
//     } 
// } else {
//         capitalizedLastName += userLastName.slice(1);
//     }

// document.write(`<ul>
//     <li> Full name: ${capitalizedFirstName} ${capitalizedLastName}</li>
//     <li> Email: ${email}</li>
//     <li> Age: ${age}</li>
//     </ul>`)
