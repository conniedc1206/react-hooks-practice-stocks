import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  console.log(stocks);

  const renderedStocksArray = stocks.map((stock) => {
    return <Stock stock={stock} />;
  });

  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocksArray}
    </div>
  );
}

export default StockContainer;
