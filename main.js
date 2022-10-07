



// const products = [
// 	['apple',10],
// 	['banana',8],
// 	['mango',20],
// 	['grape',18]
// ]
// let copiedProducts = [];

//         function getPrice(products,seasonFunc){
//             let total = 0;
//             copiedProducts = JSON.parse(JSON.stringify(products));
//             copiedProducts
//             .map( item =>{
//                 copiedProducts += item[1]
//                 return total;
//             })
//             return typeof seasonFunc === `function`? seasonFunc (total) : total;
        
//         }
    

// function summerValue(products){
// 	return products*0.8;
// }

// function winterValue(products){
// 	return products*2;
// }
// console.log( getPrice(products));
// console.log( getPrice(products, winterValue));
// console.log( getPrice(products, summerValue));





// =======task==========

// const vegetables = [
//     {
//         name: `tomato`,
//         icon: `🍅`,
//         price: 2.3
//     },
//     {
//         name: `carrot`,
//         icon: `🥕`,
//         price: 1.5
//     },
//     {
//         name: `corn`,
//         icon: `🌽`,
//         price: 2.78,
//         season: true
//     }
// ];

// const fruits = [
//     {
//         name: `watermelon`,
//         icon: `🍉`,
//         price: 7.7,
//         season: true
//     },
//     {
//         name: `cherries`,
//         icon: `🍒`,
//         price: 8.5,
//         season: true
//     },
//     {
//         name: `pineapple`,
//         icon: `🍍`,
//         price: 9.8
//     }
// ];

// const Product = {
//     getPrice(){...},
//     getInfo(){...}
// }

const sqvaire = document.querySelector(`#sqaire`);

const getRandomIntInclusive = (min = 0, max =255) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
 
 const getRandomColor = () =>{
    let colors = [];
    for(let i=0; i<=i; i++){
        colors.push(getRandomIntInclusive())
    }
    return`rgb(${colors.join(`,`)})`;
 }
 
 sqvaire.forEach (=> sqvaire = {
 setInterval(() => sqvaire.style.backgroundColor = getRandomColor(),1000)
 });
sqvaire.style.left = 100;
sqvaire.style.top = 0;
const STEP = 10;

const sqvaireMuving = setInterval(() => {
    sqvaire.style.left =  sqvaire.style.left === ` ` ?`${STEP} px`: parseInt(sqvaire.style.left)+STEP+`px`;
    sqvaire.style.top = sqvaire.style.top === ` `  ?`${STEP} px` : parseInt(sqvaire.style.top)+STEP+`px`;

    let sqvaireRightCordinate = sqvaire.offsetLeft+sqvaire.offsetWids;
    let sqvaireTopCordinate = sqvaire.offsetTop+sqvaire.offsetHeight;

    let bodyWidth = document.body.offsetWidth;
    let bodyHeight = document.body.offsetHeight;

    if(sqvaireRightCordinate > bodyWidth){
        console.log(`out of body`);
        clearInterval(sqvaireMuving);

        sqvaire.style.left = parseInt(sqvaire.style.left)-STEP*2`px`;
    }else if(sqvaireTopCordinate> bodyHeight) {
        console.log(`out of body`);
        clearInterval(sqvaireMuving);
        sqvaire.style.top = parseInt(sqvaire.style.top)-STEP*2+`px`;
    }
},1000);
  


