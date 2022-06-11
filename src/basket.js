const basket = [];
const deliveryCost = 4.95;
const basketSubtotal = [];

function clearBasket() {
    basket.length = 0;
    basketSubtotal.length = 0;
    document.getElementById('basket-shop').innerHTML = '';
    document.getElementById('basket-info').style = 'display: flex';
    document.getElementById('basket-bar').innerHTML = '';
    renderRemoveFromBasketBtn();
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
                    <span>${i + 1}</span>
                    <span>${item.name}</span>
                </div>
                <span>${priceFormat}</span>
            </div>
            <span>${item.note}</span>
        </div>
    `;
    };
};

function renderBasketBar() {
    const basketBar = document.getElementById('basket-bar');

    const subTotal = basketSubtotal.reduce((sum, item) => sum + item, 0);
    const subTotalFormat = String(subTotal.toFixed(2)).replace('.', ',');

    const deliveryCostFormat = String(deliveryCost).replace('.', ',');

    const total = (subTotal + deliveryCost).toFixed(2);
    const totalFormat = String(total).replace('.', ',');

    basketBar.innerHTML =
    `
        <div class="basket-bar__subtotal">
           <span>Zwischensumme</span>
            <span>${subTotalFormat} €</span>
        </div>

        <div class="basket-bar__subtotal">
            <span>Lieferkosten</span>
            <span>${deliveryCostFormat} €</span>
        </div>

        <div class="basket-bar__total">
            <span>Gesamt</span>
            <span>${totalFormat} €</span>
        </div>

        <div class="basket-bar__total-btn" onclick="clearBasket()">
            <span>Bezahlen (${totalFormat} €)</span>
        </div>
    `;
};

function addToBasket(number) {
    const dishToBasket = dishes[number];

    basket.push({
        
        name: dishToBasket.name,
        note: dishToBasket.note,
        price: dishToBasket.price,

    });

    basketSubtotal.push(Number(dishToBasket.price));

    renderAddToBasketBtn(number);
    renderBasket(number);
    renderBasketBar();
};