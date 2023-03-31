//This component contains the form for users to input their availability.

import React, { useState } from 'react';
import SearchBar from './SearchBar';

function AvailabilityForm(props) {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (day && time) {
      props.onSubmit({ day, time });
      setDay('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Availability</h2>
      <div className="form-group">
        <label htmlFor={`day-${props.id}`} className="form-label">Day:</label>
        <input type="text" id={`day-${props.id}`} className="form-input" value={day} onChange={handleDayChange} placeholder="Enter a day" />
      </div>
      <div className="form-group">
        <label htmlFor={`time-${props.id}`} className="form-label">Time:</label>
        <input type="text" id={`time-${props.id}`} className="form-input" value={time} onChange={handleTimeChange} placeholder="Enter a time" />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}

export default AvailabilityForm;
