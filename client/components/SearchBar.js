//allows users to search for their friends
import React from 'react';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <label htmlFor={props.id} className="form-label">{props.label}</label>
      <input type="text" id={props.id} className="search-input" value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  );
}

export default SearchBar;

//It receives props for the id, label text, current value, onChange event handler, and placeholder text