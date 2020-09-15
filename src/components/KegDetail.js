import React from 'react';
import PropTypes from "prop-types";
// import Keg from './Keg';

function KegDetail(props) {
    const { keg, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Keg Detail</h1>
            <h3>{keg.brand} - {keg.varietal}</h3>
            <h3>{keg.price}</h3>
            <h3>{keg.abv}</h3>
            <button onClick={() => onClickingDelete(keg.id) }>Delete Keg</button>
            <hr/>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default KegDetail;

