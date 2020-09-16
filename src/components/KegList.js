import React from "react";
import PropTypes from 'prop-types';
import Keg from "./Keg";


function KegList(props) {

  return (
    <React.Fragment>
     <div class="p-10">
     <header>Keg List</header> 
         <div className="border shadow rounded-lg p-10">
            <div class="max-w-xl flex-column">
            {props.kegList.map((keg) => 
                <Keg 
                whenKegClicked = { props.onKegSelection }
                brand={keg.brand}
                varietal={keg.varietal}
                price={keg.price}
                abv={keg.abv}
                id={keg.id}
                key={keg.id} />
            )}
            </div>
         </div>
     </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;