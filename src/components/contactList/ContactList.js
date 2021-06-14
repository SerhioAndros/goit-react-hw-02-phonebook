import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
