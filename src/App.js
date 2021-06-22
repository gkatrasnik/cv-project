import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Expirience from "./components/Expirience";
import { Container, Row, Col, Navbar, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

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

  //edits empty education
  addEducation = (item, index) => {
    this.setState((state) => {
      const educationList = this.state.educationList;
      educationList[index] = item;
      return { educationList };
    });

    console.log("state after submiting", this.state.educationList);
  };

  //adds empty object to educationList, with uniqid
  addEmptyEducation = () => {
    let emptyItem = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
      id: uniqid(),
    };
    this.setState({
      educationList: this.state.educationList.concat(emptyItem),
    });
  };

  deleteEducation = (i) => {
    const newEducationList = this.state.educationList;
    newEducationList.splice(i, 1);
    this.setState({ educationList: newEducationList });

    console.log(this.state.educationList);
  };

  addExpirience = (item) => {
    this.setState({
      expirienceList: this.state.expirienceList.concat(item),
    });
  };

  render() {
    const renderedEducationList = this.state.educationList.map(
      (item, index) => (
        <Card key={index}>
          <Card.Body>
            <Education
              deleteEducation={this.deleteEducation}
              addEducation={this.addEducation}
              item={item}
              index={index}
            />
          </Card.Body>
        </Card>
      )
    );

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
            {renderedEducationList}
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
