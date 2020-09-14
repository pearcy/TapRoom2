import React from "react";
import PropTypes from 'prop-types';
import Keg from "./Keg";


function KegList(props) {
  return (
    <React.Fragment>
     <div class="p-10">
     <header>Keg List</header> 
         <div class="border shadow rounded-lg p-10">
            <div class="max-w-xl flex-column">
            {props.kegList.map((keg, index) => 
                <Keg 
                brand={keg.brand}
                varietal={keg.varietal}
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
  kegList: PropTypes.array
}

export default KegList;