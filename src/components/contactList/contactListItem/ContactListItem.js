import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
