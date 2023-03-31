import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AvailabilityForm from './components/AvailabilityForm';
import FriendsAvailability from './components/FriendsAvailability';
import SearchBar from './components/SearchBar';
import { fetchFriends } from './utils/api';

function App() {
  // Define state using useState hook
  const [availability, setAvailability] = useState({});
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch friends data from API when component mounts using useEffect hook
  useEffect(() => {
    fetchFriends().then((data) => setFriends(data));
  }, []);

  // Define function to handle availability form submission
  const handleAvailabilitySubmit = (newAvailability) => {
    // Update availability state with new input
    setAvailability({ ...availability, ...newAvailability });
  };

  // Define function to handle search bar input
  const handleSearchTermChange = (term) => {
    // Update search term state
    setSearchTerm(term);
  };

  // Filter friends based on search term entered by user
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render components and pass down necessary props
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AvailabilityForm onSubmit={handleAvailabilitySubmit} />
        <SearchBar onSearchTermChange={handleSearchTermChange} />
        <FriendsAvailability
          friends={filteredFriends}
          availability={availability}
        />
      </div>
    </div>
  );
}

// Export App component as default export
export default App;
