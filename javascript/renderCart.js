import { getCartList } from './addToCart.js';
import { increaseCartCounter } from './cartCounter.js';

const cartItemContainer = document.getElementById('cartItemContainer');

export function renderCart() {
    // Empty cart from HTML
    cartItemContainer.innerHTML = "";

    // Get List
    const cartList = getCartList();

    cartList.forEach((item, index) => {
        //Create div for each item in the list
        const newDiv = document.createElement('div');
        newDiv.classList.add('cart-bottom-border', 'cart-item');

        newDiv.innerHTML = `
            <div class="cart-item menu-item-name-container">
                <p class="big-text">${item.name}</p>
                <div class="cart-dot-seperator"></div>
                <p class="big-text">${item.price} SEK</p>
            </div>
            <div class="cart-quantity-controller">
                <p class="cart-button bigger-text clickable" id="remove-${index}">-</p>
                <p class="medium-text" id="itemAmount-${index}">${item.quantity} stycken</p>
                <p class="cart-button bigger-text clickable" id="add-${index}">+</p>
            </div>`;

        // add event listeners to buttons
        const removeBtn = newDiv.querySelector(`#remove-${index}`);
        const addBtn = newDiv.querySelector(`#add-${index}`);
        const amountP = newDiv.querySelector(`#itemAmount-${index}`);

           // remove quantity
        removeBtn.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cartList.splice(index, 1);
            }
            increaseCartCounter(cartList);
            renderCart(); 
        });

        // add quantity
        addBtn.addEventListener('click', () => {
            item.quantity++;
            increaseCartCounter(cartList);
            renderCart();
        });

        cartItemContainer.appendChild(newDiv);
 
    });

    //Calculate total price of cart
    const totalPrice = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalSum.innerText = `${totalPrice} SEK`;
}

renderCart();