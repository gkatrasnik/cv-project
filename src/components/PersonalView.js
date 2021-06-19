import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class PersonalView extends Component {
  render() {
    const { fullName, address, phone, email, toggleShowForm } = this.props;
    return (
      <Card>
        <Card.Body>
          <h4>Full name</h4>
          <p>{fullName}</p>
          <h4>Address</h4>
          <p>{address}</p>
          <h4>Phone Number</h4>
          <p>{phone}</p>
          <h4>Email</h4>
          <p>{email}</p>
          <div>
            <Button
              onClick={toggleShowForm}
              type="submit"
              className="float-right"
            >
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
