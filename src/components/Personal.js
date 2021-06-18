import React, { Component } from "react";
import PersonalForm from "./PersonalForm";
import PersonalView from "./PersonalView";

export default class Personal extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      address: "",
      phone: "",
      email: "",
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
  };

  toggleShowForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };
  render() {
    const { fullName, address, phone, email, showForm } = this.state;

    return showForm ? (
      <PersonalForm
        fullName={fullName}
        address={address}
        phone={phone}
        email={email}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    ) : (
      <PersonalView
        fullName={fullName}
        address={address}
        phone={phone}
        email={email}
        toggleShowForm={this.toggleShowForm}
      />
    );
  }
}
