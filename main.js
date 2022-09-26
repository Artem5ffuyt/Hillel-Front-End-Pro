



const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]
let copiedProducts = [];

        function getPrice(products,seasonFunc){
            let total = 0;
            copiedProducts = JSON.parse(JSON.stringify(products));
            copiedProducts
            .map( item =>{
                copiedProducts += item[1]
                return total;
            })
            return typeof seasonFunc === `function`? seasonFunc (total) : total;
        
        }
    

function summerValue(products){
	return products*0.8;
}

function winterValue(products){
	return products*2;
}
console.log( getPrice(products));
console.log( getPrice(products, winterValue));
console.log( getPrice(products, summerValue));
