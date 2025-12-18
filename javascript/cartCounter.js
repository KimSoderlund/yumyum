//update cart counter
const cartCounter = document.getElementById("cartCounter");

import { orderBtnActivation } from './sendOrderBtn.js';

export function increaseCartCounter (cartItems) {
    let cartSize = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCounter.innerText = cartSize;

    orderBtnActivation();
}