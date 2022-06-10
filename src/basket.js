const basket = [];

function addToBasket(number) {
    const dishToBasket = dishes[number];

    basket.push({
        name: dishToBasket.name, 
        price: dishToBasket.price,
    })

    console.log(basket);

    renderAdToBasket(number);
}

function clearBasket() {
    basket.length = 0;
}