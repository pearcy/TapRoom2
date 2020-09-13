import React from 'react'

function SignInForm () {
    return (
        <React.Fragment>
            <form>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Sign In</button>
            </form>
        </React.Fragment>

    );
}

export default SignInForm;
