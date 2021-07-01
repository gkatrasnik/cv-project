import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Expirience from "./components/Expirience";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      educationList: [],
      expirienceList: [],
    };
  }

  //education section------------------------------------

  //edits empty education
  addEducation = (item, index) => {
    this.setState((state) => {
      const educationList = this.state.educationList;
      educationList[index] = item;
      return { educationList };
    });
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
  };

  //expirience section----------------------------------

  //edits empty expirience
  addExpirience = (item, index) => {
    this.setState((state) => {
      const expirienceList = this.state.expirienceList;
      expirienceList[index] = item;
      return { expirienceList };
    });
  };

  //adds empty object to expirienceList, with uniqid
  addEmptyExpirience = () => {
    let emptyItem = {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateOfWork: "",
      id: uniqid(),
    };
    this.setState({
      expirienceList: this.state.expirienceList.concat(emptyItem),
    });
  };

  deleteExpirience = (i) => {
    const newExpirienceList = this.state.expirienceList;
    newExpirienceList.splice(i, 1);
    this.setState({ expirienceList: newExpirienceList });
  };

  render() {
    //Education section
    const renderedEducationList = this.state.educationList.map(
      (item, index) => (
        <Education
          key={index}
          deleteEducation={this.deleteEducation}
          addEducation={this.addEducation}
          item={item}
          index={index}
        />
      )
    );

    //Expirience section
    const renderedExpirienceList = this.state.expirienceList.map(
      (item, index) => (
        <Expirience
          key={index}
          deleteExpirience={this.deleteExpirience}
          addExpirience={this.addExpirience}
          item={item}
          index={index}
        />
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
            <Button
              onClick={this.addEmptyEducation}
              className="float-right m-4"
            >
              Add
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2>Practical Expirience</h2>
            {renderedExpirienceList}
            <Button
              onClick={this.addEmptyExpirience}
              className="float-right m-4"
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
