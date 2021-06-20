import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Expirience from "./components/Expirience";
import { Container, Row, Col, Navbar, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEducation: 1,
      numberOfExpirience: 1,
      educationList: [],
      expirienceList: [],
    };

    this.addEducation = this.addEducation.bind(this);
    this.addToEducationNumber = this.addToEducationNumber.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  addEducation = (item) => {
    this.setState({
      educationList: this.state.educationList.concat(item),
    });
  };

  addToEducationNumber = () => {
    let i = this.state.numberOfEducation;
    this.setState({
      numberOfEducation: i + 1,
    });
  };

  //it gets right index, but deleting doesnt work.

  deleteEducation = (i) => {
    this.setState((state) => {
      const educationList = state.educationList.filter((task, j) => i !== j);
      return {
        educationList,
      };
    });
  };

  addExpirience = (item) => {
    this.setState({
      expirienceList: this.state.expirienceList.concat(item),
    });
  };

  render() {
    console.log(this.state.educationList);
    const educationList = [];
    for (let i = 0; i < this.state.numberOfEducation; i++) {
      educationList.push(
        <Card key={i}>
          <Card.Body>
            <Education
              deleteEducation={this.deleteEducation}
              addEducation={this.addEducation}
              index={i}
            />
          </Card.Body>
        </Card>
      );
    }
    return (
      <Container>
        <Navbar className="justify-content-center">
          <h1>CV Maker</h1>
        </Navbar>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2>Personal Info</h2>
            <Personal />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2>Education</h2>
            {educationList}
            <Button onClick={this.addToEducationNumber} className="float-right">
              Add
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2>Practical Expirience</h2>
            <Expirience />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
