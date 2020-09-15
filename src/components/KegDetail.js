import React from 'react';
import PropTypes from "prop-types";
// import Keg from './Keg';

function KegDetail(props) {
    const { keg, onClickingDelete } = props;

    return (
        <React.Fragment>
            <div class="p-10">
            <header>Keg Detail</header> 
                <div class="border shadow rounded-lg p-10">
                    <div class="max-w-xl flex-column">
                        {keg.brand}
                        {keg.varietal}
                        {keg.price}
                        {keg.abv}
                    </div>
                </div>
                <button onClick={() => onClickingDelete(keg.id) }>Delete Keg</button>
                <hr/>
            </div>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default KegDetail;



