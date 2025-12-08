const cartBtn = document.getElementById('cartBtn');
const menuView = document.getElementById('menuView');
const cartView = document.getElementById('cartView');
const backgroundSelector = document.querySelector('main');


// TODO: Ta bort klasserna visible/invisible och ändra style istället.
cartBtn.addEventListener('click', ()  => {
    if(menuView.classList.contains('visible')){
        menuView.classList.replace('visible', 'invisible');
        cartView.classList.replace('invisible', 'visible') 
        
        //Change Color palette
        backgroundSelector.classList.replace('menu-colors','cart-colors')
        console.log("tog bort view från MenuView och bytte färger")

    } else if (cartView.classList.contains('visible')) {
        cartView.classList.replace('visible','invisible');
        menuView.classList.replace('invisible','visible');
        console.log("tog bort view från cartView");

        backgroundSelector.classList.replace('cart-colors','menu-colors')

    } else {console.log("Inget korrekt utfall")}

});


// console.log('Funkar JS?')

// const url = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";

// async function getApiKey() {
//     console.log ("funktionen startat?")
//     try {
//         const settings = {method: 'GET'};
//         const keyUrl = url+'/key';
//         console.log (keyUrl);
//         const response = await fetch(keyUrl, settings)
//         const data = await response.json();
//         console.log(data);
//     } catch (error) { console.log(error)}
//     };