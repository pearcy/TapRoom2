import React from 'react';
import PropTypes from "prop-types";
import Keg from './Keg';

function KegDetail(props) {
    const { keg, onClickingDelete } = props;

            return (
            <React.Fragment>
            <header>Keg Details</header> 
            <div className="flex">
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{keg.brand}</h4>
                </div>
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{keg.varietal}</h4>
                </div>
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{keg.price}</h4>
                </div>
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{keg.abv}</h4>
                </div>
                <div className="flex text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">  
                <div>
                <button onClick={() => onClickingDelete(keg.id) }>Delete Keg</button>
                </div>
              </div>
            </div> 
            </React.Fragment>
            );
            
}


KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default KegDetail;



