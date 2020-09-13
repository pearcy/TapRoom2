import React from "react";
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <React.Fragment>
      <div class="flex">
        <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <h4>{props.brand}</h4>
        </div>
        <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <h4>{props.name}</h4>
        </div>
        <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <h4>{props.price}</h4>
        </div>

        <div class="flex text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <pourForm>
            <pourButton>Pour</pourButton>
            </pourForm>
        </div>
       
      </div> 
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  abv: PropTypes.string
};


export default Keg;
