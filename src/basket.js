const basket = [];
const deliveryCost = 4.95;
let basketSubtotal = 0;


function clearBasket() {
    basket.length = 0;
    basketSubtotal = 0;

    document.getElementById('basket-shop').innerHTML = '';
    document.getElementById('basket-info').style = 'display: flex';
    document.getElementById('basket-bar').innerHTML = '';

    for (let i = 0; i < dishes.length; i++) {
        document.getElementById(`dish-${i}`).innerText = '+';
    };
}


function renderBasket(number) {
    document.getElementById('basket-info').style = 'display: none';

    const showBasket = document.getElementById('basket-shop');
    showBasket.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        const item = basket[i];
        const priceFormat = (item.price).replace('.', ',');

        showBasket.innerHTML += `
        <div class="menu-added-to-basket">
            <div class="menu-added-to-basket__info">
                <div>
                    <span>${item.count}</span>
                    <span>${item.name}</span>
                </div>
                <span>${priceFormat} €</span>
            </div>
        </div>
        <div class="menu-added-to-basket__add-remove">
            <a href="#">Anmerkung hinzufügen</a>
            <div>
                <div>
                    <span onclick="removeFromBasket(${item.dish})">-</span>
                </div>
                <div>
                    <span onclick="addToBasket(${item.dish})">+</span>
                </div>
            </div>
        </div>
    `;
    };
};


function formatPriceToShow() {
    const subTotalFormat = basketSubtotal.toFixed(2).replace('.', ',');

    const deliveryCostFormat = String(deliveryCost).replace('.', ',');

    const total = (basketSubtotal + deliveryCost).toFixed(2);
    const totalFormat = String(total).replace('.', ',');

    return [subTotalFormat, deliveryCostFormat, totalFormat];
}


function renderBasketBar() {
    const basketBar = document.getElementById('basket-bar');

    const pricesToShow = formatPriceToShow();

    basketBar.innerHTML =
        `
        <div class="basket-bar__subtotal">
           <span>Zwischensumme</span>
            <span>${pricesToShow[0]} €</span>
        </div>

        <div class="basket-bar__subtotal">
            <span>Lieferkosten</span>
            <span>${pricesToShow[1]} €</span>
        </div>

        <div class="basket-bar__total">
            <span>Gesamt</span>
            <span>${pricesToShow[2]} €</span>
        </div>

        <div class="basket-bar__total-btn" onclick="clearBasket()">
            <span>Bezahlen (${pricesToShow[2]} €)</span>
        </div>
    `;
};


function basketSubtotalSum() {
    let price = 0;

    basket.forEach(element => {
        price += Number(element.price) * element.count;
        basketSubtotal = price;
    });
}


function addToBasket(number) {
    const dishToBasket = dishes[number];

    const dishIndex = basket.findIndex(item => item.dish === number);

    if (dishIndex < 0) {
        basket.push({
            dish: number,
            count: 1,
            name: dishToBasket.name,
            note: dishToBasket.note,
            price: dishToBasket.price,
        });
    } else {
        basket[dishIndex].count++;
    };

    basketSubtotalSum();
    renderAddToBasketBtn(number);
    renderBasket(number);
    renderBasketBar();
};


function removeFromBasket(number) {
    const addToBasketBtn = document.getElementById(`dish-${number}`);

    const dishIndex = basket.findIndex(item => item.dish === number);

    if (basket[dishIndex].count > 1) {
        basket[dishIndex].count--;
        addToBasketBtn.innerText--;
    } else {
        basket.splice(dishIndex, 1);
        addToBasketBtn.innerText = '+';
        basketSubtotal = 0;
    }

    if (basket.length !== 0) {
        basketSubtotalSum();
        renderBasket();
        renderBasketBar();
    } else {
        clearBasket();
    }
}