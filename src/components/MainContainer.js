import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data));
  }, []);
  console.log(stocks);

 const handleStockAdd = (stockObj) => {
   setPortfolio([...portfolio, stockObj])
  //portfolio and setPortfolio uses key/id of Stock clicked
 }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockAdd={handleStockAdd}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portfolio={portfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
