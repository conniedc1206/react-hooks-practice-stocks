import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockAdd }) {
  console.log(stocks);


  const renderedStocksArray = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStockAdd={onStockAdd} />;
  });

  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocksArray}
    </div>
  );
}

export default StockContainer;
