//Displays the details of a single friend.

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Availability from './Availability';

function Friend(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredAvailability = props.availability.filter(day => day.day.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="friend">
      <h2>{props.name}</h2>
      <SearchBar id={`search-${props.id}`} label="Search Availability" value={searchText} onChange={handleSearchChange} placeholder="Search for a day" />
      <Availability availability={filteredAvailability} />
    </div>
  );
}

export default Friend;
