import React, { Component } from "react";
import EducationForm from "./EducationForm";
import EducationView from "./EducationView";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.toggleShowForm();
    let item = {
      schoolName: this.state.schoolName,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudy: this.state.dateOfStudy,
    };
    let index = this.props.index;
    this.props.addEducation(item, index);
  };

  toggleShowForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };

  render() {
    const { showForm, schoolName, titleOfStudy, dateOfStudy } = this.state;
    const { index, deleteEducation } = this.props;

    return showForm ? (
      <EducationForm
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        toggleShowForm={this.toggleShowForm}
        itemIndex={index}
      />
    ) : (
      <EducationView
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        toggleShowForm={this.toggleShowForm}
        deleteEducationView={deleteEducation}
        itemIndex={index}
      />
    );
  }
}
