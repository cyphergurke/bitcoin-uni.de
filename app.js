let ws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
let satoPriceElement = document.getElementById('sato-price');
let eursatsElement = document.getElementById('sato-eur');

ws.onmessage = (event) => {
    let satoObject = JSON.parse(event.data);
    let satoprice = parseFloat(satoObject.p).toFixed(0) / 100000000;
    let satoeur = 1 / satoprice;
    let sats = Math.round(satoeur);

    satoPriceElement.innerHTML = sats;
    eursatsElement.innerHTML = satoprice;
};

function CalcEur() {
    let satos = document.getElementById('satoshis').value;
    let satseuro = document.getElementById("sato-price").innerHTML;
    let euros = satos / satseuro;

    document.getElementById('eur').value = euros.toFixed(6);
};

function CalcSats() {
    let euro = document.getElementById('eur').value;
    let satseuro = document.getElementById("sato-price").innerHTML;
    let satos = euro * satseuro;
    let sats = Math.round(satos);
    document.getElementById('satoshis').value = sats;
};

