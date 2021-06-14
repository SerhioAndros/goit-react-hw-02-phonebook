import React from "react";

const Filter = ({ value, onChange }) => (
  <>
    <label>Find contacts by name</label>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      //   onInput={this.handleInputFilter}
    />
  </>
);

export default Filter;
