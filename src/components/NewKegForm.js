import React from "react";

function NewKegForm(prop) {
    return (
        <StyledForm>
            <form>
                <input type="text" placeholder="Brand" />
                <input type="text" placeholder="Varietel" />
                <input type="text" placeholder="Price" />
                <input type="text" placeholder="ABV" />
                <button>Submit</button>
            </form>
        </StyledForm>
    );
}

NewKegForm.propTypes = {
    brand: PropTypes.string.isRequired,
    varietal: PropTypes.string.isRequired,
    price: PropTypes.string,
    abv: PropTypes.string
};

export default NewKegForm;
