import React, { Component } from 'react';
import { Grid, Jumbotron, Col, Row, Alert} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import CustomNavbar from './CustomNavbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false
    }
    this.handleAlert = this.handleAlert.bind(this);
  }
  handleAlert() {
    this.setState({showAlert: !this.state.showAlert})
  }
  render() {
    return (
      <div className="App">
      {/* <CustomNavbar/> */}
        <Grid fluid={true}>
          <Row className="show-grid">
            <div className="App-header">
              <Col xs={12} md={12}>
              {this.state.showAlert && <Alert bsStyle="success" onDismiss={this.handleAlert}>
                <strong>Holy guacamole!</strong> Best check yo self,you're not looking too good.
              </Alert>}
                <header>
                  <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <div className="container sign-in">
                    <h1 className="App-title">Welcome to React Landing Page</h1>
                    <Form showAlert={this.handleAlert}/>
                  </div>
                </header>
              </Col>
            </div>
            {/* <Col xs={12} md={12}>
                <Jumbotron>
                  HEELLOO
                </Jumbotron>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
