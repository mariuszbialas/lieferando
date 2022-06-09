window.onscroll = function () {
    const shopBasket = document.getElementById('basket-shop');

    if (window.scrollY > 0) {
        shopBasket.style = 'top: 0; height: 100vh;';
    } else {
        shopBasket.style = 'top: 10vh; height: 90vh;';
    }
}

function renderMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    for (let i = 0; i < dishes.length; i++) {
        const element = dishes[i];
        
        menu.innerHTML += `
            <div class="menu__dish" id="dish1"> 
                <div class="dish-to-basket">
                    <p>+</p>
                </div>
                <div class="dish-info">
                    <div class="dish-info-txt">
                        <p>${element.name}</p>
                        <p>${element.info}</p>
                        <p></p>
                        <p>${element.price} €</p>
                    </div>
                    <div class="dish-info-pic">
                        <img src="${element.pic}" alt="">
                    </div>
                </div>
            </div>
        `;
    }
}
