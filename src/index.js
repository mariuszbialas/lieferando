window.onscroll = function () {
    const shopBasket = document.getElementById('basket-shop');

    if (window.scrollY > 0) {

        shopBasket.style = 'top: 0; height: 100vh;';

    } else {
        shopBasket.style = 'top: 10vh; height: 90vh;';
    }
}