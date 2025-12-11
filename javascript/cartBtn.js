const cartBtn = document.getElementById('cartBtn');
const menuView = document.getElementById('menuView');
const cartView = document.getElementById('cartView');
const cartCounter = document.getElementById('cartCounter')
const backgroundSelector = document.querySelector('main');


//JS to replace views and change colors depending on view
cartBtn.addEventListener('click', ()  => {
    if(menuView.classList.contains('visible')){
        menuView.classList.replace('visible', 'invisible');
        cartCounter.classList.replace('visible', 'invisible');
        cartView.classList.replace('invisible', 'visible')         
        backgroundSelector.classList.replace('menu-colors','cart-colors')

    } else if (cartView.classList.contains('visible')) {
        cartView.classList.replace('visible','invisible');
        menuView.classList.replace('invisible','visible');
        cartCounter.classList.replace('invisible', 'visible');
        backgroundSelector.classList.replace('cart-colors','menu-colors')

    } else {console.log("Inget korrekt utfall")}
});