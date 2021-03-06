import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class ExpirienceView extends Component {
  render() {
    const { item, toggleShowForm, deleteExpirienceView, index } = this.props;

    return (
      <Card>
        <Card.Body>
          <h4>Name of Company</h4>
          <p>{item.companyName}</p>
          <h4>Position Title</h4>
          <p>{item.positionTitle}</p>
          <h4>Main Tasks at Work</h4>
          <p>{item.mainTasks}</p>
          <h4>Date of Work</h4>
          <p>{item.dateOfWork}</p>
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
                deleteExpirienceView(index);
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
