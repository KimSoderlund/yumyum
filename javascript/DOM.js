import { getMenu } from './API/apiInit.js';

const wontonContainer = document.getElementById("wonton-container");

export async function renderWontons() {

    const menuList = await getMenu();
    const wontonList = menuList.items.filter(item => item.type === 'wonton');
    console.log(wontonList);

    //töm wontoncontainer
    wontonContainer.innerHTML = "";

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


}



renderWontons();

/*<div id = "wonton-container">
                <div class = "menu-item menu-top-item menu-bottom-border clickable">
                    <div class = "menu-item-name-container">
                        <p class = "big-text">KARLSTAD</p>
                        <p class = "dot-seperator"></p>
                        <p class = "big-text">9 SEK</p>
                    </div>
                    <p class = "tiny-text">Kantarell, scharlottenlök, etc</p>
                </div>

                <div class = "menu-item menu-bottom-border active clickable">
                    <div class = "menu-item-name-container">
                        <p class = "big-text">KARLSTAD</p>
                        <p class = "dot-seperator"></p>
                        <p class = "big-text">9 SEK</p>
                    </div>
                    <p class = "tiny-text">Kantarell, scharlottenlök, etc</p>
                </div>

                <div class = "menu-item menu-bottom-item clickable">
                    <div class = "menu-item-name-container">
                        <p class = "big-text">KARLSTAD</p>
                        <p class = "dot-seperator"></p>
                        <p class = "big-text">9 SEK</p>
                    </div>
                    <p class = "tiny-text">Kantarell, scharlottenlök, etc</p>
                </div>
            </div>*/