let pizzaOven =  (crustType, sauceType, cheeses, toppings) => {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

let p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])

// TIME TO DELIVER A PIZZA BALL!
let pizzaBall = pizzaOven("pizza ball", "traditional", ["mozarella"], ["extra cheese", "pepperoni"]);

let myPizza = pizzaOven("cheesy crust", "vodka", ["mozarella"], ["extra cheese", "red onion", "mushroom", "green pepper"])

let arrayItemPicker = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

let arrayListMaker = (arr) => {
    let listLength = Math.floor((Math.random() * arr.length) + 1);

    let newArr = []

    while (newArr.length < listLength) {
        newArr.push(arrayItemPicker(arr));
    }

    return newArr;
}

let randomPizza = () => {
    let crustTypes = [
        "deep dish",
        "hand tossed",
        "pizza ball",
        "cheesy crust"
    ]

    let sauceTypes = [
        "traditional",
        "marinara",
        "vodka"
    ]

    let cheeses = [
        "mozarella",
        "feta"
    ]

    let toppings = [
        "pepperoni",
        "sausage",
        "mushrooms",
        "onions",
        "olives",
        "green peppers",
        "extra cheese"
    ]

    return pizzaOven(
        arrayItemPicker(crustTypes),
        arrayItemPicker(sauceTypes),
        arrayListMaker(cheeses),
        arrayListMaker(toppings)
    )
}