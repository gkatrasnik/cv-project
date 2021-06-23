import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class ExpirienceView extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      mainTasks,
      dateOfWork,
      toggleShowForm,
      deleteExpirienceView,
      index,
    } = this.props;
    return (
      <Card>
        <Card.Body>
          <h4>Name of Company</h4>
          <p>{companyName}</p>
          <h4>Position Title</h4>
          <p>{positionTitle}</p>
          <h4>Main Taks at Work</h4>
          <p>{mainTasks}</p>
          <h4>Date of Work</h4>
          <p>{dateOfWork}</p>
          <div>
            <Button
              onClick={toggleShowForm}
              type="submit"
              className="float-right"
            >
              Edit
            </Button>
            <Button
              onClick={function () {
                deleteExpirienceView(index);
              }}
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
