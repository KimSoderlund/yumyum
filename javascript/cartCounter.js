//update cart counter
const cartCounter = document.getElementById("cartCounter");
const visibilitySelector = document.getElementById("menuView");

export function increaseCartCounter (cartItems) {
    let cartSize = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCounter.innerText = cartSize;
}