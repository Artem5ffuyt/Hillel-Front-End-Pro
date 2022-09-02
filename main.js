


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
    for (let i = 0; i < arr.length; i++) {

        let TDs = [];
        for (let j = 0; j < arr[i].length; j++) {
            TDs.push(`<td>${arr[i][j]}</td>`);

        }

        TRs.push(`<tr>${TDs.join(``)}</tr>`);   
      
    }
    console.log(TRs);
 
    

    return `<table><caption>Animals info</caption><caption> ${TRs.join(``)} </caption></table>`;
    
}


document.write(getInfo(animals, `Animals`));
document.write(getInfo(food,`info`));

