// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
  timeRange: string;
}

function TradingViewWidget({ symbol, timeRange }: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|3M"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "12",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "fontColor": "rgba(19, 23, 34, 1)",
          "gridLineColor": "rgba(42, 46, 57, 0.49)",
          "lineWidth": 2,
          "lineType": 2,
          "dateRanges": [
            "3m|60"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(187, 217, 251, 1)",
          "bottomColor": "rgba(255, 255, 255, 1)"
        }`;
      container.current!.appendChild(script);

      
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
    </div>
  );
}

export default memo(TradingViewWidget);
