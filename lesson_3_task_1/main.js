let captionString = `Food prices for`;
let date = new Date(),
    day = date.getDate(),
    month = date.getMonth()+1,
    year = date.getFullYear();


const aplle =`🍎`;
const applePrice = 10;
const appleCount = 3;
const appleSalePercent = 2.1;


const orange = `🍊`;
const orangePrice = 12;
const orangeCount = 2;
const orangeSalePercent = 0.72;


const kiwi = `🥝`;
const kiwiPrice = 15;
const kiwiCount = 10;
const kiwiCountryPercent = 15;


const resultApple = applePrice * appleCount - appleSalePercent;
const resultOrange = orangePrice * orangeCount - orangeSalePercent;
const resultkiwi = kiwiPrice * kiwiCount + kiwiCountryPercent;

const finPraceFor = `Final price for`;

const totalResult = resultApple + resultOrange + resultkiwi;


console.log(`${captionString.replace('=', '-')} ${day }.${month}.${year} `)

console.log(`${finPraceFor} ${appleCount} ${aplle} = ${resultApple.toFixed()} UAH` )
console.log(`${finPraceFor} ${orangeCount} ${orange} = ${resultOrange.toFixed()} UAH`)
console.log(`${finPraceFor} ${kiwiCount} ${kiwi} = ${resultkiwi.toFixed()} UAH`)

console.log(`Final price for all products = ${totalResult.toFixed()} UAH`);