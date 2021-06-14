import React, { Component } from "react";
import { v4 as uuid } from "uuid";
// import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleAddContact = (evt) => {
    evt.preventDefault();
    if (!this.state.name.trim()) return alert("There is no name");
    if (!this.state.number.trim()) return alert("There is no number");
    if (
      this.state.contacts
        .map((contact) => contact.name)
        .includes(this.state.name.trim())
    )
      return alert(`${this.state.name.trim()} is already in contacts`);
    if (
      this.state.contacts
        .map((contact) => contact.number)
        .includes(this.state.number.trim())
    )
      return alert(`${this.state.number.trim()} is already in contacts`);
    this.setState((prevState) => {
      const tmpObject = {
        id: uuid(),
        name: this.state.name.trim(),
        number: this.state.number.trim(),
      };
      return { contacts: [...prevState.contacts, tmpObject] };
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />

          <button type="button" onClick={this.handleAddContact}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
            </li>
          ))}
        </ul>

        <p>{uuid()}</p>
      </>
    );
  }
}
