import React from 'react';
import PropTypes from 'prop-types';

function PourDecrement(props) {

    function handlePourDecrement(event) {
        event.preventDefault();
        props.pourDecrement({

        });
    }

    return (
        <React.Fragment>
            <form onSubmit={handlePourDecrement}>

            <button className='decrement' onClick={(e) => this.pourDecrement(e)}>Pour Dec</button>
            </form>
        </React.Fragment>
    )

}

<h1>Current Count: {this.state.count}</h1>
