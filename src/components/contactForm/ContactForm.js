import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.name.trim() || !this.state.number.trim())
      return alert("You've missed something :)");
    if (
      this.props.contacts
        .map((contact) => contact.name)
        .includes(this.state.name.trim())
    )
      return alert(`"${this.state.name.trim()}" is already in contacts`);
    if (
      this.props.contacts
        .map((contact) => contact.number)
        .includes(this.state.number.trim())
    )
      return alert(`"${this.state.number.trim()}" is already in contacts`);

    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const uniqueIdName = uuid();
    const uniqueIdNumber = uuid();
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={uniqueIdName}>Name</label>
        <input
          type="text"
          name="name"
          id={uniqueIdName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor={uniqueIdNumber}>Number</label>
        <input
          type="tel"
          name="number"
          id={uniqueIdNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
