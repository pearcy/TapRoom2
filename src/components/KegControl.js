import React from "react";
import KegList from './KegList';
import KegForm from './KegForm';


class KegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick = () => {
    //     this.setState({formVisibleOnPage: true});
    // }


    handleClick = () => {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }));
      }



    render() {
        let currentlyVisibleState = null;
        let buttonText = null; // new code
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <KegForm />
            buttonText = "Return to Keg List"; // new code
            } else {
            currentlyVisibleState = <KegList />
            buttonText = "Add Keg" // new code
            }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }

}

export default KegControl;