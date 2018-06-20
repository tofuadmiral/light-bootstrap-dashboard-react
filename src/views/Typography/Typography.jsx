import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Form, FormGroup, FormControl, ControlLabel, Radio, HelpBlock, Glyphicon, MenuItem  } from 'react-bootstrap';

import Card from "components/Card/Card.jsx";


class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      firstNameValid: null,
      lastNameValid: null,
      emailValid: null,
      phoneValid: null,
    };

    this.getEmailValidationState = this.getEmailValidationState.bind(this);
    this.getFirstnameValidationState = this.getFirstnameValidationState.bind(this);
    this.getLastnameValidationState = this.getLastnameValidationState.bind(this);
    this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }


  getEmailValidationState() {
    if (this.state.email === undefined || this.state.email.length === 0) return null;
    const length = this.state.email.length;
    if (this.state.email.indexOf("@") === -1 ||
        this.state.email.indexOf(".") === -1) return 'error';
    else if (length > 0) return 'success';
  }

  getFirstnameValidationState() {
    if (this.state.firstname === undefined || this.state.firstname.length === 0) return null;
    const length = this.state.firstname.length;
    if (length < 1) return 'error';
    else return 'success';
  }

  getLastnameValidationState() {
    if (this.state.lastname === undefined || this.state.lastname.length === 0) return null;
    const length = this.state.lastname.length;
    if (length < 1) return 'error';
    else return 'success';
  }

  isSubmitDisabled() {
    if (this.getEmailValidationState() === 'success' &&
        this.getFirstnameValidationState() === 'success' &&
        this.getLastnameValidationState() === 'success') {
      return false;
    }
    return true;
  }

  componentDidMount() {
    console.log("component mounted"); 
  }

  handleFirstnameChange(e) {
    this.setState({
      firstname: e.target.value,
      error: null,
    });
  }

  handleLastnameChange(e) {
    this.setState({
      lastname: e.target.value,
      error: null,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      error: null,
    });
  }

  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value,
      error: null,
    });
  }

  render() {
    return (
      <div className="content text-center" align="center"> <center><h2>Complete the Following Form to Post a Ride</h2> </center>
      
      <div className="row text-center">
      <div className="col-md-8 col-md-offset-3">
      <Form horizontal>
        <FormGroup 
          controlId="formControlsFirstName"
          validationState={this.getFirstnameValidationState()}
        >
          <Col sm="9">   
            <ControlLabel>First Name</ControlLabel>
            <FormControl type="text" placeholder="e.g. John" onChange={this.handleFirstnameChange}>
            </FormControl>
          </Col>
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup 
          controlId="formControlsLastName"
          validationState={this.getLastnameValidationState()}
        >
          <Col sm="9">   
            <ControlLabel>Last Name</ControlLabel>
            <FormControl type="text" placeholder="e.g. Doe" onChange={this.handleLastnameChange}>
            </FormControl>
          </Col>
          <FormControl.Feedback />
        </FormGroup>

    
        <FormGroup 
          controlId="formControlsEmail"
          validationState={this.getEmailValidationState()}
        >
          <Col sm="9">   
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="e.g. johndoe@email.com" onChange={this.handleEmailChange}>
            </FormControl>
          </Col>
          <FormControl.Feedback />
        </FormGroup>
         
        <FormGroup controlId="formControlsPhoneNumber">
          <Col sm="9">   
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl type="text" onChange={this.handlePhoneChange}>
            </FormControl>
          </Col>
          <FormControl.Feedback />
        </FormGroup>


        <FormGroup controlId="formControlsSelect">
          <Col sm="9"> 
            <ControlLabel>Driving From</ControlLabel>
              <FormControl componentClass="select">
                  <option value="McMaster University">McMaster University</option>
                  <option value="Richmond Hill">Richmond Hill</option>
                  <option value="Oakville">Oakville</option>
                  <option value="Square One">Square One</option>
                  <option value="North York">North York</option>
                  <option value="Georgetown">Georgetown</option>
                  <option value="Milton">Milton</option>
                  <option value="Markham">Markham</option>
                  <option value="Scarborough">Scarborough</option>
                  <option value="Thornhill">Thornhill</option>
                  <option value="Etobicoke">Etobicoke</option>
                  <option value="Toronto">Toronto (DT)</option>
                  <option value="St. Catharines">St. Catharines</option>
                  <option value="London">London</option>
                  <option value="Kitchener">Kitchener</option>
              </FormControl>
              </Col>
            </FormGroup>


        <FormGroup controlId="formControlsSelect">
          <Col sm="9">   
            <ControlLabel>Destination</ControlLabel>
              <FormControl componentClass="select">                  
                  <option value="McMaster University">McMaster University</option>
                  <option value="Richmond Hill">Richmond Hill</option>
                  <option value="Oakville">Oakville</option>
                  <option value="Square One">Square One</option>
                  <option value="North York">North York</option>
                  <option value="Georgetown">Georgetown</option>
                  <option value="Milton">Milton</option>
                  <option value="Markham">Markham</option>
                  <option value="Scarborough">Scarborough</option>
                  <option value="Thornhill">Thornhill</option>
                  <option value="Etobicoke">Etobicoke</option>
                  <option value="Toronto">Toronto (DT)</option>
                  <option value="St. Catharines">St. Catharines</option>
                  <option value="London">London</option>
                  <option value="Kitchener">Kitchener</option>
              </FormControl>
          </Col>
            </FormGroup>
      <Col sm="9"> 
        <Button type="submit" bsStyle="primary" disabled={this.isSubmitDisabled()}>Submit</Button>
      </Col>
      </Form>
      </div>
      </div>
      
      </div>
    );
  }
}

export default Typography;
