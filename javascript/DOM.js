import { getMenu } from './API/apiInit.js';

const wontonContainer = document.getElementById("wonton-container");
const dipContainer = document.getElementById("dip-container")

export async function renderMenu() {

    const menuList = await getMenu();
    const wontonList = menuList.items.filter(item => item.type === 'wonton');
    const dipList = menuList.items.filter(item => item.type === 'dip');
    console.log(dipList);

    //töm wontoncontainer
    wontonContainer.innerHTML = "";
    dipContainer.innerHTML = "";

    //Klassaplikator
    wontonList.forEach((item, index) => {
        const ingredientsText = item.ingredients.join(", ");

        const div = document.createElement("div");

        //Klasser alla ska ha
        div.classList.add("menu-item", "clickable");

        //Klasser för specifika platser
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

        wontonContainer.appendChild(div);
    });

    
    //Dipsåser

    const sausePrice = document.getElementById("drink-price")
    sausePrice.innerText =`${dipList[0].price} SEK`;

    dipList.forEach((item, index) => {
            const p = document.createElement("p");
            p.classList.add("submenu-item", "tiny-text", "clickable");
    
            p.innerText = item.name;
    
            dipContainer.appendChild(p);
        });

    
}





// Todo: Flytta den här till en central plats
renderMenu();