import React from "react";
import PropTypes from 'prop-types';


function KegForm(props) {
    return (
        <React.Fragment>
            <form>
                <input type="text" placeholder="Brand" />
                <input type="text" placeholder="Varietel" />
                <input type="text" placeholder="Price" />
                <input type="text" placeholder="ABV" />
                <button>Submit</button>
            </form>
        </React.Fragment>
    );
}

KegForm.propTypes = {
    brand: PropTypes.string.isRequired,
    varietal: PropTypes.string.isRequired,
    price: PropTypes.string,
    abv: PropTypes.string
};


export default KegForm;
