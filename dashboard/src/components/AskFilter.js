import React from 'react';
import {Button,Modal} from 'react-bootstrap';
export default class AskFilter extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow=this.handleShow.bind(this);
        this.handleSearchSubmit=this.handleSearchSubmit.bind(this);
        this.state = {
          show: false
        };
      }
      handleSearchSubmit(){
        let element=document.getElementById('filters');
        let choice=element.options[element.selectedIndex].value;
        console.log('choice',choice);
          this.handleClose();
          this.props.getSearchValue({
            choice: choice,
            searchValue: document.getElementById('filterSearch').value
          });
      }

      handleShow() {
        this.setState({ show: true });
      }

      handleClose() {
        this.setState({ show: false });
      }
    
    render(){
        return(
            <div>  
               <Button variant="primary" onClick={this.handleShow}>
          Apply filters
        </Button>
  
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Enter the filter credentials...</Modal.Title>
              </Modal.Header>
              <Modal.Body><input type="text" placeholder="type something here..." id="filterSearch"/>
              <div>
                <select name="" id="filters">
                <option value="searchByLength">search by length</option>
                <option value="searchByText">Search by Text</option>
                </select>
            </div>
            </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button> */}
                <Button variant="primary" onClick={this.handleSearchSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}