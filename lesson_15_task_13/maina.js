class Bulka {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.ingredients = [`patty`, `lettuce`, `tomato`];
    }
    
    setAdditionalIngredients(...args){
        args.map( elem => this.ingredients.push(elem) )
        return this
    }
}

let Hamburger = new Bulka("Hamburger", "small");
Hamburger.setAdditionalIngredients(`egg`, `onion`);

class Cheeseburger extends Bulka{
    constructor(name, size){
        super(name,size);
        this.ingredients.push(`cheese`);
    }
}



let myCheeseburger = new Cheeseburger( "Cheeseburger", "small");
myCheeseburger.setAdditionalIngredients(`egg`, `onion`);