import React, { Component } from "react";
import ExpirienceForm from "./ExpirienceForm";
import ExpirienceView from "./ExpirienceView";

export default class Expirience extends Component {
  constructor(props) {
    super();
    this.state = {
      companyName: props.item.companyName,
      positionTitle: props.item.positionTitle,
      mainTasks: props.item.mainTasks,
      dateOfWork: props.item.dateOfWork,
      id: props.item.id,
      index: props.index,
      showForm: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //recives props after initial state setting and updates state
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      companyName: nextProps.item.companyName,
      positionTitle: nextProps.item.positionTitle,
      mainTasks: nextProps.item.mainTasks,
      dateOfWork: nextProps.item.dateOfWork,
      index: nextProps.index,
    });
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
      companyName: this.state.companyName,
      positionTitle: this.state.positionTitle,
      mainTasks: this.state.mainTasks,
      dateOfWork: this.state.dateOfWork,
      id: this.state.id,
    };
    this.props.addExpirience(item, index);
  };

  toggleShowForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };

  render() {
    const {
      showForm,
      companyName,
      positionTitle,
      mainTasks,
      dateOfWork,
      index,
    } = this.state;
    const { deleteExpirience } = this.props;

    return showForm ? (
      <ExpirienceForm
        companyName={companyName}
        positionTitle={positionTitle}
        mainTasks={mainTasks}
        dateOfWork={dateOfWork}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        toggleShowForm={this.toggleShowForm}
        index={index}
      />
    ) : (
      <ExpirienceView
        companyName={companyName}
        positionTitle={positionTitle}
        mainTasks={mainTasks}
        dateOfWork={dateOfWork}
        toggleShowForm={this.toggleShowForm}
        deleteExpirienceView={deleteExpirience}
        index={index}
      />
    );
  }
}
