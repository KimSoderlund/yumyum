import './cartBtn.js'

const url = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";
let apiKey = '';

async function getApiKey() {
    try {
        const settings = {method: 'POST'};
        const keyUrl = url+'keys';
        const response = await fetch(keyUrl, settings)
        const data = await response.json();
        apiKey = data.key;
    } catch (error) { console.log(error)}
    };

    await getApiKey();


    // TODO: Ta bort console.logs
    async function getTenant() {
        const tenantUrl = url+'tenants'
        const bodyToSend = {name : JSON.stringify(Date.now())};
        console.log(`name: ${JSON.stringify(bodyToSend)}`)
        console.log(`API Key: ${apiKey}`)
        const settings = {
            'method': 'POST',
            body: JSON.stringify(bodyToSend),
            headers : {
            "Content-Type": "application/json",
            "x-zocom": apiKey
            }
        }
        console.log(settings)
        console.log(tenantUrl)
        const response = await fetch(tenantUrl, settings);
        const data = await response.json();
        const tenant = data;
        console.log(`New Tenant: ${tenant}`)
    };

    await getTenant();