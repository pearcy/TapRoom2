import React from 'react';
import PropTypes from 'prop-types';

function PourPint(props) {
    return (
        <React.Fragment>
            <button onClick={ props.handlePourPint }>Pour Pint</button>
        </React.Fragment>
    )

}

PourPints.propTypes = {
    handlePourPint: PropTypes.func,
}

export default PourPint;




