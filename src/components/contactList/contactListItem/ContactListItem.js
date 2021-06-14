import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number }) => (
  <li>
    <p>
      {name}: {number}
    </p>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ContactListItem;
