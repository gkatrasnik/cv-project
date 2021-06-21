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
    this.addEmptyEducation = this.addEmptyEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  addEducation = (item, index) => {
    this.setState((state) => {
      const educationList = this.state.educationList;
      educationList[index] = item;
      return { educationList };
    });
    console.log("item" + item, " ---- index" + index);
    console.log("state after submiting", this.state.educationList);
  };

  addEmptyEducation = () => {
    let emptyItem = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
    };
    this.setState({
      educationList: this.state.educationList.concat(emptyItem),
    });
  };

  //deleting works, but always deletes last index

  deleteEducation = (i) => {
    const educationList = this.state.educationList;
    educationList.splice(i, 1);
    this.setState((state) => {
      return { educationList };
    });
  };

  addExpirience = (item) => {
    this.setState({
      expirienceList: this.state.expirienceList.concat(item),
    });
  };

  render() {
    const educationList = [];
    for (let i = 0; i < this.state.educationList.length; i++) {
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
            <Button onClick={this.addEmptyEducation} className="float-right">
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
