
function repairClok(ClokName){
    if(ClokName === `Casio N112`){
        return 100;
    }else if (ClokName === `rollex 333`){
        return 10000;
    }else{
        return 300;
    }
}
 let priceForRepeir = repairClok(`casio N112`)
console.log(priceForRepeir)

