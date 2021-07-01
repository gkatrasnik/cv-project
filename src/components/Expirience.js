import React, { Component } from "react";
import ExpirienceForm from "./ExpirienceForm";
import ExpirienceView from "./ExpirienceView";

export default class Expirience extends Component {
  constructor(props) {
    super(props);
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

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({
        companyName: this.props.item.companyName,
        positionTitle: this.props.item.positionTitle,
        mainTasks: this.props.item.mainTasks,
        dateOfWork: this.props.item.dateOfWork,
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
    const { showForm, index } = this.state;
    const { deleteExpirience, item } = this.props;

    return showForm ? (
      <ExpirienceForm
        item={item}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        toggleShowForm={this.toggleShowForm}
        index={index}
      />
    ) : (
      <ExpirienceView
        item={item}
        toggleShowForm={this.toggleShowForm}
        deleteExpirienceView={deleteExpirience}
        index={index}
      />
    );
  }
}
