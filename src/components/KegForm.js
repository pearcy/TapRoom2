import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function KegForm(props) {
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        console.log(event.target.brand.value);
        console.log(event.target.varietal.value)
        console.log(event.target.price.value);
        console.log(event.target.abv.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleNewTicketFormSubmission}>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="varietal" placeholder="Varietal" />
                <input type="text" name="price" placeholder="Price" />
                <input type="text" name="abv" placeholder="ABV" />
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
