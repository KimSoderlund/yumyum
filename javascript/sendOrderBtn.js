import { getCartList } from './addToCart.js';
export let canSend = false;

export function orderBtnActivation() { 
const listCheck = getCartList();
if (listCheck && listCheck.length > 0) {
    canSend = true;
    console.log('can send')
    } else {canSend = false; console.log('cant send')}
}