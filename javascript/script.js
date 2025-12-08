const cartBtn = document.getElementById('cartBtn');
const menuView = document.getElementById('menuView')

cartBtn.addEventListener('click', ()  => {
    menuView.classList.add('invisible');
    menuView.classList.remove('visible');
    cartView.classList.add('visible');
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