import { renderCart } from "./renderCart.js";
import { canSend } from "./sendOrderBtn.js";
import { sendOrder } from "./sendOrder.js";
import { removeOrder } from "./newOrderBtn.js";
import { orderBtnActivation } from "./sendOrderBtn.js";


//Buttons
const cartBtn = document.getElementById('cartBtn');
const orderBtn = document.getElementById('placeOrderBtn');
const newOrderBtn = document.getElementById('newOrderBtn');
const returnBtn = document.getElementById('returnBtn');

//Views and other elements
const menuView = document.getElementById('menuView');
const cartView = document.getElementById('cartView');
const orderView = document.getElementById('orderView');
const cartContainer = document.getElementById('cartBtnContainer');
const cartCounter = document.getElementById('cartCounter');

const backgroundSelector = document.querySelector('main');


//JS to replace views and change colors depending on view
cartBtn.addEventListener('click', ()  => {
    if(menuView.classList.contains('visible')){
        menuView.classList.replace('visible', 'invisible');
        cartCounter.classList.replace('visible', 'invisible');
        cartView.classList.replace('invisible', 'visible')         
        backgroundSelector.classList.replace('menu-colors','cart-colors')
        renderCart();
    } else if (cartView.classList.contains('visible')) {
        cartView.classList.replace('visible','invisible');
        menuView.classList.replace('invisible','visible');
        cartCounter.classList.replace('invisible', 'visible');
        backgroundSelector.classList.replace('cart-colors','menu-colors')
    } else {console.log("Inget korrekt utfall")}
});

returnBtn.addEventListener('click', () => {
    cartView.classList.replace('visible','invisible');
    menuView.classList.replace('invisible','visible');
    cartCounter.classList.replace('invisible', 'visible');
    backgroundSelector.classList.replace('cart-colors','menu-colors')
});

//Back & from orderView

orderBtn.addEventListener('click', async () => {
    if (!canSend) {return};
    cartView.classList.replace('visible','invisible');
    cartContainer.classList.replace('visible','invisible');
    orderView.classList.replace('invisible', 'visible');
    backgroundSelector.classList.replace('cart-colors','order-colors')
await sendOrder();

});

newOrderBtn.addEventListener('click',() => {
    orderView.classList.replace('visible', 'invisible');
    cartContainer.classList.replace('invisible','visible');
    cartCounter.classList.replace('invisible', 'visible');
    menuView.classList.replace('invisible','visible');
    backgroundSelector.classList.replace('order-colors','menu-colors')
    removeOrder();
    orderBtnActivation();

});