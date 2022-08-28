 




let hero = ['Ivan'];
    hero = ['Richard'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = []
    rainbow = hero.concat(native, destination).reverse()
    rainbow.push('Gave','Battle','Vain')
    rainbow[0] = rainbow[4];
    rainbow[1] = rainbow[2];
    rainbow[2] = rainbow[3];
    rainbow[3] = rainbow[7];
    rainbow[4] = rainbow[6];
    rainbow[5] = rainbow[7];
   
    rainbow.length = 7;

let colors = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `pink`]

document.write(`<div style = " display: flex;
                               margin: 10% auto;" >`)
for( let i = 0; i<rainbow.length; i++){
    document.write(`<div>
    <span>${rainbow[i]}</span>
    <div style  = "background:${colors[i]};
                   width:30px; height:30px;
                   border-radius:50%;
                   margin: 20% auto;
                   margin-right: 10px;
                   "></div>
        </div>`)
   
   
}

document.write(`</div>`)

console.log(rainbow)