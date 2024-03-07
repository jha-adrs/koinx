//Store ids for tokens in trading view and coin gecko 
// Should be done in DB

export const TOKENS = {
    "ethereum": {
        SYMBOL:"ETH",
        TV_ID: {
            SYMBOL: "BITSTAMP:ETHUSD"
        },
        CG: {
            ID: "ethereum",
            SYMBOL: "eth",
            NAME: "Ethereum"
          }
    },
    "bitcoin": {
        SYMBOL:"BTC",
        TV_ID: {
            SYMBOL: "BITSTAMP:BTCUSD"
        },
        CG: {
            ID :"bitcoin",
            SYMBOL: "btc",
            NAME: "Bitcoin"
        }
    }
}