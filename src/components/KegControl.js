import React from "react";
import KegList from './KegList';
import KegForm from './KegForm';


class KegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKegList: []
        };
    }

    // this.handleClick = this.handleClick.bind(this);

    // handleClick = () => {
    //     this.setState({formVisibleOnPage: true});
    // }


    handleClick = () => {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }));
      }

      handleAddingNewKegToList = (newKeg) => {
          const newMasterKegList = this.state.masterKegList.concat(newKeg);
          this.setState({
            masterKegList: newMasterKegList,
            formVisibleOnPage: false
        });
      }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null; // new code
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
            buttonText = "Return to Keg List"; 
            } else {
            currentlyVisibleState = <KegList kegList={this.state.masterKegList} />;
            buttonText = "Add Keg" 
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