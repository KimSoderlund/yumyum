import { getCartList } from './addToCart.js';
export let canSend = false;

export function orderBtnActivation() { 
const listCheck = getCartList();
if (listCheck && listCheck.length > 0) {
    canSend = true;
    } else {canSend = false;}
}