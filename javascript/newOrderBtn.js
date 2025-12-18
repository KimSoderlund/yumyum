const cartCounter = document.getElementById("cartCounter");
import { getCartList } from './addToCart.js';

export function removeOrder() {
    const order = getCartList();
    order.length = 0;
    cartCounter.innerText = '0';
}