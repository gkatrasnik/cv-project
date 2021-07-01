import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EducationForm extends Component {
  render() {
    const { item, handleSubmit, handleChange, index } = this.props;
    return (
      <Form
        onSubmit={(e) => {
          handleSubmit(e, index);
        }}
      >
        <Form.Group controlId="school">
          <Form.Label>School name</Form.Label>
          <Form.Control
            defaultValue={item.schoolName}
            onChange={handleChange}
            name="schoolName"
            type="text"
            placeholder="Enter school name"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="titleOfStudy">
          <Form.Label>Title of study</Form.Label>
          <Form.Control
            defaultValue={item.titleOfStudy}
            onChange={handleChange}
            name="titleOfStudy"
            type="text"
            placeholder="Enter title of your study"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="dateOfStudy">
          <Form.Label>Date of study</Form.Label>
          <Form.Control
            defaultValue={item.dateOfStudy}
            onChange={handleChange}
            name="dateOfStudy"
            type="date"
            placeholder="Enter date of your study"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="float-right m-2">
          Submit
        </Button>
      </Form>
    );
  }
}
