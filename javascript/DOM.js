import { getMenu } from './API/apiInit.js';
import { clickMenuBtn } from './addToCart.js';

const wontonContainer = document.getElementById("wonton-container");
const dipContainer = document.getElementById("dip-container");
const drinkContainer = document.getElementById("drink-container");


export async function renderMenu() {

    const menuList = await getMenu();
    const wontonList = menuList.items.filter(item => item.type === 'wonton');
    const dipList = menuList.items.filter(item => item.type === 'dip');
    const drinkList = menuList.items.filter(item => item.type === 'drink')

    //Empty menu-containers
    wontonContainer.innerHTML = "";
    dipContainer.innerHTML = "";
    drinkContainer.innerHTML = "";

    //Class aplicator
    wontonList.forEach((item, index) => {
        const ingredientsText = item.ingredients.join(", ");

        const div = document.createElement("div");
        //General Classes
        div.classList.add("menu-item", "clickable");
        //Specific index classes
        if (index == 0) {div.classList.add("menu-top-item", "menu-bottom-border")            
        } else if (index == wontonList.length -1) {
            div.classList.add("menu-bottom-item")
        } else {
            div.classList.add("menu-bottom-border")
        }
        div.innerHTML = `
            <div class="menu-item-name-container">
                <p class="big-text">${item.name}</p>
                <p class="dot-seperator"></p>
                <p class="big-text">${item.price} SEK</p>
            </div>
            <p class="tiny-text">${ingredientsText}</p>`;
        
            
        div.addEventListener("click", () => clickMenuBtn(item), );
        
        wontonContainer.appendChild(div);
    });
    
    //Dip sauses
    const sausePrice = document.getElementById("dip-price")
    sausePrice.innerText =`${dipList[0].price} SEK`;

    dipList.forEach((item) => {
            const p = document.createElement("p");
            p.classList.add("submenu-item", "tiny-text", "clickable");
            p.innerText = item.name;

            p.addEventListener("click", () => clickMenuBtn(item));

            dipContainer.appendChild(p);
        });
    
    //drinks
    const drinkPrice = document.getElementById("drink-price")
    drinkPrice.innerText =`${drinkList[0].price} SEK`;

    drinkList.forEach((item) => {
            const p = document.createElement("p");
            p.classList.add("submenu-item", "tiny-text", "clickable");
            p.innerText = item.name;

            p.addEventListener("click", () => clickMenuBtn(item));

            drinkContainer.appendChild(p);
        });      
}

renderMenu();