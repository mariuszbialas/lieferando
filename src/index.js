window.onscroll = function () {
    const shopBasketScroll = document.querySelector('.basket-shop__desktop');

    if (window.scrollY > 0) {
        shopBasketScroll.style = 'top: 0; height: 100vh;';
    } else {
        shopBasketScroll.style = 'top: 10vh; height: 90vh;';
    }
}


function generateMenuInnerHTML (i) {
    const element = dishes[i];

    return `<div class="menu__dish"> 
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


function renderMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    for (let i = 0; i < dishes.length; i++) {
        menu.innerHTML += generateMenuInnerHTML(i); 
    }
}


function renderAddToBasketBtn(number) {
    let addToBasket = document.getElementById(`dish-${number}`);
    addToBasket.innerText === '+' ? addToBasket.innerText = 1 : addToBasket.innerText++ ;
};