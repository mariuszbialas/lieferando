const basket = [];

function addToBasket(number) {
    const dishToBasket = dishes[number];

    basket.push({
        name: dishToBasket.name, 
        note: dishToBasket.note, 
        price: dishToBasket.price,
    })

    console.log(basket);

    renderAdToBasket(number);
    renderBasket(number);
}


function clearBasket() {
    basket.length = 0;
    document.getElementById('basket-shop').innerHTML = '';
    document.getElementById('basket-info').style = 'display: flex';
}

function renderBasket(number) {
    document.getElementById('basket-info').style = 'display: none';

    const showBasket = document.getElementById('basket-shop');
    showBasket.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        const item = basket[i];
        
        showBasket.innerHTML += `
        <div class="menu-added-to-basket">
            <div class="menu-added-to-basket__info">
                <div>
                    <span>${i + 1}</span>
                    <span>${item.name}</span>
                </div>
                <span>${item.price}</span>
            </div>
            <span>${item.note}</span>
        </div>
    `;
    }
    
    
    
    
}