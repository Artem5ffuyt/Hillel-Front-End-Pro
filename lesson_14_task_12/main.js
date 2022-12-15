const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];

const Product = {
    getPrice(){let result = this.season ? this.price*this.seasonKoef : this.price
        return result.toFixed(2)
    },
    getInfo(){return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: $${this.getPrice()}`
    },
}

const Vegetable = Object.create(Product);
Vegetable.type = 'Vegetable';
Vegetable.seasonKoef = 1.3;

const Fruit = Object.create(Product);
Fruit.type = 'Fruit';
Fruit.seasonKoef = 2;

const makePrototype = (arr, objectProto) => {
    let another = arr 
        .map(item => {
            let another = Object.create(objectProto); 
            Object.assign(another, item);

            return another
    })
    return another
}

let veget = makePrototype(vegetables, Vegetable); 
let fruitEnather = makePrototype(fruits, Fruit); 

const renderList = arr => {
    let LIs = arr
    .map(item => `<li>${item.getInfo()}</li>`);

    return `<ul>${LIs.join(``)}</ul>`
}

document.write( renderList(veget) );
document.write( renderList(fruitEnather) );

