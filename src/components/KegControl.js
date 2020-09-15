import React from "react";
import KegList from './KegList';
import KegForm from './KegForm';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKegList: [],
            selectedKeg: null
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedKeg: null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
      }

      handleAddingNewKegToList = (newKeg) => {
          const newMasterKegList = this.state.masterKegList.concat(newKeg);
          this.setState({
            masterKegList: newMasterKegList,
            formVisibleOnPage: false
        });
      }

      handleChangingSelectedKeg = (id) => {
          const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id) [0];
          this.setState({selectedKeg: selectedKeg
        });
      }

      handleDeletingKeg = (id) => {
          const newMasterKegList = this.state.masterKegList.filter(ticket => ticket.id !== id);
          this.setState({
              masterKegList: newMasterKegList,
              selectedKeg: null
          });
      }


    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.selectedKeg !=null) {
            currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg}
            onClickingDelete = {this.handleDeletingKeg} />
            buttonText = "Return to List";
        }

        else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />;
            buttonText = "Return to List"; 
            } else {
            currentlyVisibleState = <KegList kegList={this.state.masterKegList} 
            onKegSelection={this.handleChangingSelectedKeg} />;
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