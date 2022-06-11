window.onscroll = function () {
    const shopBasketScroll = document.querySelector('.basket-shop__desktop');

    if (window.scrollY > 0) {
        shopBasketScroll.style = 'top: 0; height: 100vh;';
    } else {
        shopBasketScroll.style = 'top: 10vh; height: 90vh;';
    }
}

function renderMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    for (let i = 0; i < dishes.length; i++) {
        const element = dishes[i];
        
        menu.innerHTML += `
            <div class="menu__dish"> 
                <div class="dish-to-basket" onclick="addToBasket(${i})">
                    <p id="dish-${i}">+</p>
                </div>
                <div class="dish-info">
                    <div class="dish-info-txt">
                        <p>${element.name}</p>
                        <p>${element.info}</p>
                        <p></p>
                        <p>${(element.price).replace('.', ',')} €</p>
                    </div>
                    <div class="dish-info-pic">
                        <img src="${element.pic}" alt="">
                    </div>
                </div>
            </div>
        `;
    }
}

function renderAddToBasketBtn(number) {
    const adToBasket = document.getElementById(`dish-${number}`);
    if(adToBasket.innerText === '+') {
        adToBasket.innerText = 1;
    } else {
        adToBasket.innerText = Number(adToBasket.innerText) + 1;
    };
};

function renderRemoveFromBasketBtn() {
    
    for (let i = 0; i < dishes.length; i++) {
        document.getElementById(`dish-${i}`).innerText = '+';
    };
};