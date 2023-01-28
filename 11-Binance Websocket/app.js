const wsEth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@ticker");
const wsAvax = new WebSocket(
  "wss://stream.binance.com:9443/ws/avaxusdt@ticker"
);
const wsBtc = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@kline_1m"
);

const stockPriceElementETH = document.getElementById("stock-price");
const stockPriceElementAVAX = document.getElementById("stockpriceAVAX");
const stockPriceElementBtc = document.getElementById("stockpriceBtc");
//const lastPrice = null;
let lastPrice;

const symbolElement = document.getElementById("symbol");
const symbolElementAVAX = document.getElementById("symbolAVAX");
const symbolElementBtc = document.getElementById("symbolBtc");

wsEth.onmessage = (event) => {
  const stockObj = JSON.parse(event.data);
  const price = parseFloat(stockObj.p).toFixed(2);
  const symbol = stockObj.s;

  symbolElement.innerHTML = symbol;
  stockPriceElementETH.innerHTML = price;
  if (!lastPrice || lastPrice === price) {
    stockPriceElementETH.style.color = "black";
  } else if (price > lastPrice) {
    stockPriceElementETH.style.color = "green";
  } else {
    stockPriceElementETH.style.color = "red";
  }

  lastPrice = price;

//   console.log(symbol);
//   console.log(price);
};

wsAvax.onmessage = (event) => {
  const stockObj = JSON.parse(event.data);
  const price = parseFloat(stockObj.p).toFixed(2);
  const symbolAVAX = stockObj.s;

  symbolElementAVAX.innerHTML = symbolAVAX;
  stockPriceElementAVAX.innerHTML = price;
  if (!lastPrice || lastPrice === price) {
    stockPriceElementAVAX.style.color = "black";
  } else if (price > lastPrice) {
    stockPriceElementAVAX.style.color = "green";
  } else {
    stockPriceElementAVAX.style.color = "red";
  }

  lastPrice = price;

//   console.log(symbolAVAX);
//   console.log(price);""
};

wsBtc.onmessage = (event) => {
  const stockObj = JSON.parse(event.data);
  const price = parseFloat(stockObj.p).toFixed(2);
  const symbolBtc = stockObj.s;

  symbolElementBtc.innerHTML = symbolBtc;
  stockPriceElementBtc.innerHTML = price;
  if (!lastPrice || lastPrice === price) {
    stockPriceElementBtc.style.color = "black";
  } else if (price > lastPrice) {
    stockPriceElementBtc.style.color = "green";
  } else {
    stockPriceElementBtc.style.color = "red";
  }

  lastPrice = price;

  console.log(symbolBtc);
  console.log(stockObj);
};
