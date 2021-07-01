import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class ExpirienceForm extends Component {
  render() {
    const { item, handleSubmit, handleChange, index } = this.props;
    return (
      <Form
        onSubmit={(e) => {
          handleSubmit(e, index);
        }}
      >
        <Form.Group controlId="company">
          <Form.Label>Company name</Form.Label>
          <Form.Control
            defaultValue={item.companyName}
            onChange={handleChange}
            name="companyName"
            type="text"
            placeholder="Enter company name"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="positionTitle">
          <Form.Label>Position Title</Form.Label>
          <Form.Control
            defaultValue={item.positionTitle}
            onChange={handleChange}
            name="positionTitle"
            type="text"
            placeholder="Enter title of your position"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="mainTasks">
          <Form.Label>Main Tasks</Form.Label>
          <Form.Control
            defaultValue={item.mainTasks}
            onChange={handleChange}
            name="mainTasks"
            type="text"
            placeholder="Enter Main Tasks"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="dateOfWork">
          <Form.Label>Date of Work</Form.Label>
          <Form.Control
            defaultValue={item.dateOfWork}
            onChange={handleChange}
            name="dateOfWork"
            type="date"
            placeholder="Enter date of your work"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="float-right m-2">
          Submit
        </Button>
      </Form>
    );
  }
}
