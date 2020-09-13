import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    name: "Stout",
    brand: "New Belgium",
    price: "$ 4.00",
    abv: "7%"
  },

  {
    name: "Lager",
    brand: "Surly",
    price: "$ 4.00",
    abv: "6%"

  },

  {
    name: "Ale",
    brand: "Dogfish",
    price: "$ 4.00",
    abv: "4%"

  }
];


function KegList() {
  return (
    <React.Fragment>
      <hr/>
      <p className="text-gray-700 text-base">
      Keg List
      </p>
      
      {masterKegList.map((keg, index) => 
        <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        key={index}
        />
      )}
    </React.Fragment>

  );
}

export default KegList;