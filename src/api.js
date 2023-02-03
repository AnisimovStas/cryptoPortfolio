/* eslint-disable */
const API_KEY =
  "85d4964e83d6e54ba4a126a258e47674a81e1f9be1b18b900757e96652e4ec5a";
const tickersHandlers = new Map(); // {}
const socket = new WebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
);
const AGGREGATE_INDEX = "5";
const INVALID_SUB = "500";
socket.addEventListener("message", (e) => {
  const {
    TYPE: type,
    FROMSYMBOL: currency,
    PRICE: newPrice,
    PARAMETER: invalidCurrency,
  } = JSON.parse(e.data);

  if (type !== AGGREGATE_INDEX || newPrice === undefined) {
    if (type == INVALID_SUB) {
      let preTrimmedInvalidCurrency = invalidCurrency.slice(9);
      let tailOfPreTrimmedInvalidCurrency =
        preTrimmedInvalidCurrency.indexOf("~");
      let trimmedInvalidCurrency = preTrimmedInvalidCurrency.slice(
        0,
        tailOfPreTrimmedInvalidCurrency
      );
      invalidCurrencyToBtc(trimmedInvalidCurrency);
      return console.log("ticker_" + trimmedInvalidCurrency + "_INVALID");
    }
    return;
  }

  const handlers = tickersHandlers.get(currency) ?? [];
  handlers.forEach((fn) => fn(newPrice));
});
function sendToWebSocket(message) {
  const stringifiedMessage = JSON.stringify(message);

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(stringifiedMessage);
    return;
  }

  socket.addEventListener(
    "open",
    () => {
      socket.send(stringifiedMessage);
    },
    { once: true }
  );
}

function subscribeToTickerOnWs(ticker) {
  sendToWebSocket({
    action: "SubAdd",
    subs: [`5~CCCAGG~${ticker}~USD`],
  });
}

function unsubscribeFromTickerOnWs(ticker) {
  sendToWebSocket({
    action: "SubRemove",
    subs: [`5~CCCAGG~${ticker}~USD`],
  });
}

export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickersHandlers.get(ticker) || [];
  tickersHandlers.set(ticker, [...subscribers, cb]);
  subscribeToTickerOnWs(ticker);
};

export const unsubscribeFromTicker = (ticker) => {
  tickersHandlers.delete(ticker);
  unsubscribeFromTickerOnWs(ticker);
};

async function invalidCurrencyToBtc(currency) {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=" +
      currency +
      "&tsyms=BTC"
  );
  const price = await response.json();
  if (price.BTC) {
    console.log("ticker " + currency + " price to BTC IS: " + price.BTC);
    const responseBtcToUsd = await fetch(
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"
    );
    const btcPrice = await responseBtcToUsd.json();
    console.log("BTC price to USD IS: " + btcPrice.USD);
    const crossBtcPrice = (await price.BTC) / btcPrice.USD;
    console.log("ticker " + currency + " price to USD IS: " + crossBtcPrice);
    currency.price = crossBtcPrice;
  } else {
    console.log("ticker " + currency + " have'nt trade pair to BTC");
  }
}
