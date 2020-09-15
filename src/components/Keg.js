import React from "react";
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <div class="flex">
          <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <h4>{props.brand}</h4>
          </div>
          <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <h4>{props.varietal}</h4>
          </div>
          <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <h4>{props.price}</h4>
          </div>
          <div class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <h4>{props.abv}</h4>
          </div>

          <div class="flex text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <pourForm>
              <pourButton>Pour</pourButton>
              </pourForm>
          </div>
        </div> 
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string,
  varietal: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};


export default Keg;

