import React from "react";
// import PropTypes from 'prop-types';
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


function KegList(props) {
  return (
    <React.Fragment>
     <div class="p-10">
     <header>Keg List</header> 
         <div class="border shadow rounded-lg p-10">
            <div class="max-w-xl flex-column">
            {masterKegList.map((keg, index) => 
                <Keg 
                name={keg.name}
                brand={keg.brand}
                price={keg.price}
                abv={keg.abv}
                key={index} />
            )}

            </div>
         </div>
     </div>
     
    </React.Fragment>

  );
}

KegList.propTypes = {
  
}

export default KegList;