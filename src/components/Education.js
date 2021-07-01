//to do: on render, set education state to app/educationList object values.

import React, { Component } from "react";
import EducationForm from "./EducationForm";
import EducationView from "./EducationView";

export default class Education extends Component {
  constructor(props) {
    super(props);
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

  //recives props after initial state setting and updates state
  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({
        schoolName: this.props.item.schoolName,
        titleOfStudy: this.props.item.titleOfStudy,
        dateOfStudy: this.props.item.dateOfStudy,
        id: this.props.item.id,
        index: this.props.index,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //calls addEducation in app.js, passes item and index to edit educationList
  handleSubmit = (e, index) => {
    e.preventDefault();
    this.toggleShowForm();
    let item = {
      schoolName: this.state.schoolName,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudy: this.state.dateOfStudy,
      id: this.state.id,
    };
    this.props.addEducation(item, index);
  };

  toggleShowForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };

  render() {
    const { showForm } = this.state;
    const { deleteEducation, item, index } = this.props;

    return showForm ? (
      <EducationForm
        item={item}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        toggleShowForm={this.toggleShowForm}
        index={index}
      />
    ) : (
      <EducationView
        item={item}
        toggleShowForm={this.toggleShowForm}
        deleteEducationView={deleteEducation}
        index={index}
      />
    );
  }
}
