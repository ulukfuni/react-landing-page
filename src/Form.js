import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Form extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailHelp: false,
            passwordHelp: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.getEmailValidationState())
        console.log(this.state.email.length === 0 && this.state.password.length === 0)
        this.props.showAlert();
    }
    getEmailValidationState() {
        const length = this.state.email.length;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (length > 0) {
            if (!emailRegex.test(String(this.state.email).toLowerCase())) {
                return 'error';
            } else {
                return 'success';
            }
        } else {
            return null;
        }
    }

    getPasswordValidationState() {
        const length = this.state.password.length;
        const specialCharRegex = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
        const numberRegex = /[1234567890]/g;
        if (length > 0) {
            if (specialCharRegex.test(String(this.state.password)) && numberRegex.test(String(this.state.password)) && length >= 8) {
                return 'success';
            } else {
                return 'error';
            }
        } else {
            return null;
        }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formEmail" validationState={this.getEmailValidationState()}>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleEmailChange}/>
                    <FormControl.Feedback />
                    <HelpBlock>Needs to be in email format</HelpBlock>
                </FormGroup>
                <FormGroup validationState={this.getPasswordValidationState()} controlId="formPassword">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" value={this.state.password} placeholder="Enter Password" onChange={this.handlePasswordChange}/>
                    <FormControl.Feedback />
                    <HelpBlock>Needs to have 1 number and 1 special character and more than 8 characters</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" disabled={!this.state.email && !this.state.password}>Submit</Button>
                </FormGroup>
            </form>
        );
    }
}

export default Form;