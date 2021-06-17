import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Expirience from "./components/Expirience";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Navigation,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Personal />
        </Row>

        <Row>
          <Education />
        </Row>

        <Row>
          <Expirience />
        </Row>
      </Container>
    );
  }
}

export default App;
