//to do: on render, set education state to app/educationList object values.

import React, { Component } from "react";
import EducationForm from "./EducationForm";
import EducationView from "./EducationView";

export default class Education extends Component {
  constructor(props) {
    super();
    this.state = {
      schoolName: props.item.schoolName,
      titleOfStudy: props.item.titleOfStudy,
      dateOfStudy: props.item.dateOfStudy,
      id: props.item.id,
      index: props.index,
      showForm: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //edits empty object in app/state/educationList
  handleSubmit = (e, index) => {
    e.preventDefault();
    this.toggleShowForm();
    let item = {
      schoolName: this.state.schoolName,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudy: this.state.dateOfStudy,
    };
    this.props.addEducation(item, index);
  };

  toggleShowForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };

  render() {
    const { showForm, schoolName, titleOfStudy, dateOfStudy, index } =
      this.state;
    const { deleteEducation } = this.props;

    return showForm ? (
      <EducationForm
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        toggleShowForm={this.toggleShowForm}
        index={index}
      />
    ) : (
      <EducationView
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        toggleShowForm={this.toggleShowForm}
        deleteEducationView={deleteEducation}
        index={index}
      />
    );
  }
}
