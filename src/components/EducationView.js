import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class EducationView extends Component {
  render() {
    const {
      schoolName,
      titleOfStudy,
      dateOfStudy,
      toggleShowForm,
      deleteEducationView,
      itemIndex,
    } = this.props;
    return (
      <Card>
        <Card.Body>
          <h4>School name</h4>
          <p>{schoolName}</p>
          <h4>Title of study</h4>
          <p>{titleOfStudy}</p>
          <h4>Date of study</h4>
          <p>{dateOfStudy}</p>
          <div>
            <Button
              onClick={toggleShowForm}
              type="submit"
              className="float-right"
            >
              Edit
            </Button>
            <Button
              onClick={deleteEducationView(itemIndex)}
              type="submit"
              className="float-right"
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
