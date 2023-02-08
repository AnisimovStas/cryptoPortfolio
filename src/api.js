const API_KEY =
  "85d4964e83d6e54ba4a126a258e47674a81e1f9be1b18b900757e96652e4ec5a";
const tickersHandlers = new Map(); // {}
const socket = new WebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
);
const AGGREGATE_INDEX = "5";
const INVALID_SUB = "500";
socket.addEventListener("message", async (e) => {
  // Приходит ответ, парсим его по форме ниже
  let {
    TYPE: type,
    FROMSYMBOL: currency,
    PRICE: newPrice,
    PARAMETER: invalidCurrency,
    FLAGS: flags,
  } = JSON.parse(e.data);
  if ((type !== AGGREGATE_INDEX && type !== INVALID_SUB) || flags == 4) {
    return;
  }

  // На случай ответа что тикера нет в паре к доллару
  if (type == INVALID_SUB) {
    // преобразую 5~CCCAGG~${ticker}~USD в  ticker
    let preTrimmedInvalidCurrency = invalidCurrency.slice(9);
    let tailOfPreTrimmedInvalidCurrency =
      preTrimmedInvalidCurrency.indexOf("~");
    let trimmedInvalidCurrency = preTrimmedInvalidCurrency.slice(
      0,
      tailOfPreTrimmedInvalidCurrency
    );
    // В целом работает, но колличество запросов со временем увеличивается логарифмически
    //  setInterval(() => {
    //  sendToWebSocket({
    //action: "SubAdd",
    //  subs: [`5~CCCAGG~${trimmedInvalidCurrency}~USD`],
    //});
    //}, 10000);
    // Проверяю все ли ок с обрезкой
    console.log("ticker_" + trimmedInvalidCurrency + "_INVALID");
    // Задаю цену, по схеме ticker > btc>usd
    currency = trimmedInvalidCurrency;
    newPrice = await invalidCurrencyToBtc(trimmedInvalidCurrency);
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
  // Запрашиваю ticker к btc
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=" +
      currency +
      "&tsyms=BTC"
  );
  const price = await response.json();
  // Проверяю что пришло в ответе
  if (price.BTC) {
    // Запрашиваю стоимость BTC/USD
    const responseBtcToUsd = await fetch(
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"
    );
    const btcPrice = await responseBtcToUsd.json();
    // Добавляю кросс Курс ticker'а через btc
    const crossBtcPrice = (await price.BTC) * btcPrice.USD;

    console.log("ticker " + currency + " price to USD IS: " + crossBtcPrice);
    // Функция возвращает это значение ( по сути возвращает то, что не смог вебсокет)
    return crossBtcPrice;
  } else {
    // Если цены в ответе нет, то консоль лог что сорри, цены нет ( пока, дальше нужно будет перекрасить класс на крассный)
    return console.log("ticker " + currency + " have'nt trade pair to BTC");
  }
}
