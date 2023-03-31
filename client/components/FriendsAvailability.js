//This component displays the availability of a user's friends.

import React from 'react';

function FriendsAvailability(props) {
  const friendAvailabilities = props.friends.map(friend => (
    <div key={friend.id} className="friend-availability">
      <h3>{friend.name}</h3>
      <ul>
        {friend.availability.map(day => (
          <li key={day.day}>{day.day}: {day.time}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="friends-availability">
      <h2>Friends Availability</h2>
      {friendAvailabilities}
    </div>
  );
}

export default FriendsAvailability;


// It receives props for the friends array, which includes each friend's name and availability for each day
// component maps over the friends array and creates a div for each friend, with their name and a list of their 
// availability for each day