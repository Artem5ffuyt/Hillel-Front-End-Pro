// let captionString = `Food prices for`;
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth()+1,
//     year = date.getFullYear();


// const aplle =`🍎`;
// const applePrice = 10;
// const appleCount = 3;
// const appleSalePercent = 2.1;


// const orange = `🍊`;
// const orangePrice = 12;
// const orangeCount = 2;
// const orangeSalePercent = 0.72;


// const kiwi = `🥝`;
// const kiwiPrice = 15;
// const kiwiCount = 10;
// const kiwiCountryPercent = 15;

// const resultApple = applePrice * appleCount - appleSalePercent;
// const resultOrange = orangePrice * orangeCount - orangeSalePercent;
// const resultkiwi = kiwiPrice * kiwiCount + kiwiCountryPercent;

// const finPraceFor = `Final price for`;

// const totalResult = resultApple + resultOrange + resultkiwi;


// console.log(`${captionString.replace('=', '-')} ${day }.${month}.${year} `)

// console.log(`${finPraceFor} ${appleCount} ${aplle} = ${resultApple.toFixed()} UAH` )
// console.log(`${finPraceFor} ${orangeCount} ${orange} = ${resultOrange.toFixed()} UAH`)
// console.log(`${finPraceFor} ${kiwiCount} ${kiwi} = ${resultkiwi.toFixed()} UAH`)

// console.log(`Final price for all products = ${totalResult.toFixed()} UAH`);

let captionString = `Food prices ≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`,
    
    apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,

    orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,

    kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10,

    currentDay = new Date().getDate(),
    currentMonth = (new Date().getMonth()) + 1,
    currentYear = new Date().getFullYear(),

    discountedApplesPrice = ((applePrice - (applePrice * appleSalePercent / 100)) * appleCount).toFixed(),
    discountedOrangesPrice = ((orangePrice - (orangePrice * orangeSalePercent / 100)) * orangeCount).toFixed(),
    discountedKiwisPrice = kiwiPrice * (kiwiCount + (kiwiCount * kiwiCountryPercent / 100)).toFixed()
    ;

console.log(captionString.replaceAll(`≠`,`-`)
            .replaceAll('<ВИВІД ПОТОЧНОГО ДНЯ>', currentDay)
            .replaceAll('<ВИВІД ПОТОЧНОГО МІСЯЦЯ>', currentMonth)
            .replaceAll('<ВИВІД ПОТОЧНОГО РОКУ>', currentYear)
            );

console.log(`Final price for ${appleCount} ${apple} = ${discountedApplesPrice} UAH`);
console.log(`Final price for ${orangeCount} ${orange} = ${discountedOrangesPrice} UAH`);
console.log(`Final price for ${kiwiCount} ${kiwi} = ${discountedKiwisPrice} UAH`);
console.log(`Final price for all products = ${+discountedApplesPrice + +discountedOrangesPrice + +discountedKiwisPrice} UAH`);