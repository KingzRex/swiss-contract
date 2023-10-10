const axios = require('axios');

async function getStorageAt(network, contractAddress) {
    const position = "0x0"; // Position of the first state variable
    const data = {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getStorageAt",
        params: [contractAddress, position, "latest"]
    };

    let url;
    if (network === "mumbai") {
        url = "https://polygon-mumbai.g.alchemy.com/v2/5MFUkBCUU4jq9B-5aErdqwQg6W2feBT8";
    } else if (network === "swisstronik") {
        url = "https://json-rpc.testnet.swisstronik.com/";
    } else {
        throw new Error("Unsupported network");
    };

    const response = await axios.post(url, data);
    return response.data.result;
}

const contractAddresses = {
    mumbai: "0xA7119f6168257e3F358D330470bfB306893e388B",
    swisstronik: "0xC65FC70399711D5c3dDb361174853537232f0E89"
};


(async () => {
    const valueOnMumbai = await getStorageAt("mumbai", contractAddresses.mumbai);
    console.log(`Value on Mumbai: ${valueOnMumbai}`);

    const valueOnSwisstronik = await getStorageAt("swisstronik", contractAddresses.swisstronik);
    console.log(`Value on Swisstronik: ${valueOnSwisstronik}`);
})();
