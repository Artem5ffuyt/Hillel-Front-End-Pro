const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

function getInfo(arr){
    let TRs = []
for(let i = 0; i<arr.length; i++){
    TRs.push(`<tr><td>${arr[i]}</td></tr>`)
}
return `<table>${TRs.join(``)}</table>`
}

document.write (getInfo(animals))
// document.write (getInfo(food,`Food`))




