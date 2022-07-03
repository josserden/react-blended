import React, { Component } from 'react';
import { Form, Table } from 'components';

export class Users extends Component {
  state = {
    contacts: [],
  };

  addContact = async ({ name, age }) => {
    const newContact = {
      name,
      age,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContact} />
        <Table contacts={this.state.contacts} onDelete={this.deleteContact} />
      </>
    );
  }
}
