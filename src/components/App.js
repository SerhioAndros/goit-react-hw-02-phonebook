import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = (object) => {
    const { name, number } = object;
    this.setState((prevState) => {
      const tmpObject = {
        id: uuid(),
        name,
        number,
      };
      return { contacts: [...prevState.contacts, tmpObject] };
    });
  };

  handleInputFilter = (evt) => {
    evt.preventDefault();
    const tmpArr = this.state.contacts.map((contact) => contact.name);
    // console.log(tmpArr);
    // if (
    //   this.state.contacts
    //     .map((contact) => contact.name)
    //     .includes(this.state.name.trim())
    // )
    return console.log(tmpArr);
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleAddContact} contacts={contacts} />

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleInputChange}
          onInput={this.handleInputFilter}
        />

        <ContactList contacts={contacts} />

        <p>{uuid()}</p>
      </>
    );
  }
}
