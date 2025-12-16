import { url, tenant, apiKey } from "./API/apiInit.js";
import { getCartList } from './addToCart.js';


//Send order to API function
export async function sendOrder() {
    const orderUrl = `${url}${tenant.id}/orders`;
    const cart = getCartList();

    //Rewrite list AGAIN so it siuts API
    const items = [];
    cart.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
            items.push(item.id);
        }
    });

    //What is sent to the API
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-zocom': apiKey
        },
        body: JSON.stringify({ items })
    };

    try {
        const response = await fetch(orderUrl, settings);
        const orderData = await response.json();
        showOrderView(orderData);

    } catch (err) {
        console.error('err');
    }
}

//ETA function
function calculateEtaMinutes(order) {
    const startTime = new Date(order.timestamp);
    const etaTime = new Date(order.eta);
    const difference = Math.max(0, etaTime - startTime);
    return Math.round(difference / 60000);
}

//Update order View
function showOrderView(orderData) {
    const order = orderData.order;
    const etaMinutes = calculateEtaMinutes(order);

    document.getElementById('orderId').textContent = `ORDER ID: ${order.id}`;
    document.getElementById('orderEta').textContent = `ETA ${etaMinutes} MIN`; 
}