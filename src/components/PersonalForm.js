import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class PersonalForm extends Component {
  render() {
    const { fullName, address, phone, email, handleChange, handleSubmit } =
      this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            defaultValue={fullName}
            onChange={handleChange}
            name="fullName"
            type="text"
            placeholder="Enter full name"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            defaultValue={address}
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Enter address"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            defaultValue={phone}
            onChange={handleChange}
            name="phone"
            type="tel"
            placeholder="Enter phone number"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="emailAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control
            defaultValue={email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter your email"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="float-right m-2">
          Submit
        </Button>
      </Form>
    );
  }
}
