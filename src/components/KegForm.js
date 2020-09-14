import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function KegForm(props) {
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({
            name: event.target.name.value,
            varietal: event.target.varietal.value,
            price: event.target.price.value,
            abv: event.target.abv.value,
            id: v4()
        });
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
    abv: PropTypes.string,
    onNewKegCreation: PropTypes.func
};


export default KegForm;
