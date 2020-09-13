import React from "react";
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <React.Fragment>
      <keg>
      <h4>{props.name}</h4>
       <h4>{props.brand}</h4>
       <h4>{props.price}</h4>
       <h4>{props.abv}</h4>
      </keg> 
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
