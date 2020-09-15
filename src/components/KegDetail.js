import React from 'react';
import PropTypes from "prop-types";
// import Keg from './Keg';

function KegDetail(props) {
    const { keg } = props;

    return (
        <React.Fragment>
            <h1>Keg Detail</h1>
            <h3>{keg.brand} - {keg.varietal}</h3>
            <h3>{keg.price}</h3>
            <h3>{keg.abv}</h3>
            <hr/>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object
};

export default KegDetail;

