import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class EducationView extends Component {
  render() {
    const { item, toggleShowForm, deleteEducationView, index } = this.props;
    return (
      <Card>
        <Card.Body>
          <h4>School name</h4>
          <p>{item.schoolName}</p>
          <h4>Title of study</h4>
          <p>{item.titleOfStudy}</p>
          <h4>Date of study</h4>
          <p>{item.dateOfStudy}</p>
          <div>
            <Button
              onClick={toggleShowForm}
              type="submit"
              className="float-right m-2"
            >
              Edit
            </Button>
            <Button
              onClick={function () {
                deleteEducationView(index);
              }}
              type="submit"
              className="float-right m-2"
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
