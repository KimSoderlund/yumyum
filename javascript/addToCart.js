import { increaseCartCounter } from './cartCounter.js';

//Initiate cart list and add items to cartList and update cart counter on click.
let cartList = [];

export function getCartList() {
    return cartList;
}

export function clickMenuBtn(item) {
    //See if item exists, if it does increase quantity
    const exists = cartList.find(cartItem => cartItem.id === item.id);
    if (exists) {
        exists.quantity ++;
    } else {
        //TODO: Kontrollera att detta är all information jag behöver då jag skickar order till API
        const newCartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        };
        cartList.push(newCartItem);
    }
    increaseCartCounter(cartList);
    console.log(cartList);
}