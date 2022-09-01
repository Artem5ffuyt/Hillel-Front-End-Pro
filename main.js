// const animals = [
// 	['🐭','mouse','Jerry'],
// 	['🐹','hamster','Biscuit'],
// 	['🐰','rabbit','Bugs'],
// 	['🦊','fox','Mrs. Fox'],
// 	['🐻','bear','Paddington']
// ];

// const food = [
// 	['🍎','apple',10],
// 	['🍐','pear',12],
// 	['🍊','tangerine',15],
// 	['🍋','lemon',5],
// 	['🍌','banana',7]
// ];

// function getInfo(arr){
//     let TRs = []
    
// for(let i = 0; i<arr.length; i++){
//     TRs.push(`<tr><td>${arr[i]}</td></tr>`)
    
// }
// return `<table>${TRs.join(``)}</table>`
// }

// for(let j = 0; j<animals.length; j++){
    
//     document.write (getInfo( animals[j]))
//     document.write (getInfo(food[j]))
// }

// getInfo(animals,`Animals`) 



const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

const food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

function getInfo(arr) {
    let TRs = [];
    //створюєш пустий масив, щоб у циклі поступово 
    // закидати рядки(пусті масивчики, а на 33 рядку закидаєш значення)
    // (кількість рядків = довжині  arr) 

    for (let i = 0; i < arr.length; i++) {

        let TDs = [];
        //створюєш пустий масив щоб закинути комірки(масивчики)
        // (кількість комірок = довжині  i) 
        for (let j = 0; j < arr[i].length; j++) {
            TDs.push(`<td>${arr[i][j]}</td>`);
            // заповнення комірок
        }

        TRs.push(`<tr>${TDs.join(``)}</tr>`);
        // закидаєш у кожен рядок(так як цикл по рядкам іде)
        // масив пустих рядків 
        // TRs.push(`<tr><td>${arr[i]}</td></tr>`)
    }
    console.log(TRs);
    return `<table>${TRs.join(``)}</table>`; // сюди ж можна вставити <caption> після <table>
}

// for (let j = 0; j < animals.length; j++) {

// document.write(getInfo(animals[j]))
// document.write(getInfo(food[j]))
document.write(getInfo(animals));
document.write(getInfo(food));
// }

// getInfo(animals, `Animals`);
// багато де пропустив ';'
