const url = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";
export let apiKey = null;
export let tenant = null;
let menuList = null;





async function getApiKey() {
    try {
        const settings = {method: 'POST'};
        const keyUrl = url+'keys';
        const response = await fetch(keyUrl, settings)
        const data = await response.json();
        apiKey = data.key;
    } catch (error) { console.log(error)}
    };

    async function getTenant() {
        const tenantUrl = url+'tenants'
        const bodyToSend = {name : JSON.stringify(Date.now())};
        const settings = {
            'method': 'POST',
            body: JSON.stringify(bodyToSend),
            headers : {
            "Content-Type": "application/json",
            "x-zocom": apiKey
            }
        }
        const response = await fetch(tenantUrl, settings);
        const data = await response.json();
        tenant = data;
    };

    await getApiKey();
    await getTenant();

    async function getMenu(){
        const menuUrl = url+'menu'
        const settings = {
            'method': 'GET',
            headers : {
            "x-zocom": apiKey
            }
        }
        const response = await fetch(menuUrl, settings);
        const data = await response.json();
        menuList = data;
    }

    await getMenu();