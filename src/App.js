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
      educationList: [],
      expirienceList: [],
    };

    this.addEducation = this.addEducation.bind(this);
    this.addEmptyEducation = this.addEmptyEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteExpirience = this.deleteExpirience.bind(this);
  }

  //education section------------------------------------

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

  //expirience section----------------------------------

  //edits empty expirience
  addExpirience = (item, index) => {
    this.setState((state) => {
      const expirienceList = this.state.expirienceList;
      expirienceList[index] = item;
      return { expirienceList };
    });

    console.log("expirience state after submiting", this.state.expirienceList);
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

    console.log(this.state.expirienceList);
  };

  render() {
    //Education section
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

    //Expirience section
    const renderedExpirienceList = this.state.expirienceList.map(
      (item, index) => (
        <Card key={index}>
          <Card.Body>
            <Expirience
              deleteExpirience={this.deleteExpirience}
              addExpirience={this.addExpirience}
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
            {renderedExpirienceList}
            <Button onClick={this.addEmptyExpirience} className="float-right">
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
