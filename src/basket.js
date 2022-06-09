const basket = [];

function addToBasket(number) {
    const dishTobasket = dishes[number];

    basket.push({
        name: dishTobasket.name, 
        price: dishTobasket.price,
    })

    console.log(basket);
}