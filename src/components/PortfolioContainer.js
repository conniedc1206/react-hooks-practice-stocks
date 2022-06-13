import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio}) {

  const renderedPortfolioArray = portfolio.map((stock) => {
    return <Stock key={stock.id} stock={stock} />;
  });


  return (
    <div>
      <h2>My Portfolio</h2>
      { renderedPortfolioArray }
    </div>
  );
}

export default PortfolioContainer;
