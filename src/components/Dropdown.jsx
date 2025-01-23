import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomTypesData, setRoomTypesData] = useState([]); // Initialize as empty array
  const [newRoomType, setNewRoomType] = useState({
    name: '',
    image: '',
  });

  // Fetch room types from the backend when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5001/api/roomtypes') // Adjust the URL to your backend
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoomTypesData(response.data); // Ensure the response is an array
        } else {
          console.error('Invalid response data', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching room types:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleRoomChange = (event) => {
    const selectedRoomType = roomTypesData.find(room => room.name === event.target.value);
    setSelectedRoom(selectedRoomType);
  };

  // Handle form input changes for adding new room type
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoomType({
      ...newRoomType,
      [name]: value,
    });
  };

  // Handle form submission for adding a new room type
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newRoomType.name && newRoomType.image) {
      setRoomTypesData([...roomTypesData, newRoomType]);
      setNewRoomType({ name: '', image: '' }); // Clear the form
    }
  };

  return (
    <div className="room-type-selector">
      <h2>Select a Room Type</h2>

      {/* Dropdown for selecting a room type */}
      <select onChange={handleRoomChange} defaultValue="">
        <option value="" disabled>Select a room type</option>
        {Array.isArray(roomTypesData) && roomTypesData.length > 0 ? (
          roomTypesData.map((room, index) => (
            <option key={index} value={room.name}>
              {room.name}
            </option>
          ))
        ) : (
          <option disabled>No room types available</option>
        )}
      </select>

      {/* Display the image of the selected room type */}
      {selectedRoom && (
        <div className="room-image-container">
          <h3>{selectedRoom.name}</h3>
          <img src={selectedRoom.image} alt={selectedRoom.name} className="room-image" />
        </div>
      )}

      {/* Form to add a new room type */}
      <h3>Add a New Room Type</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Room Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newRoomType.name}
            onChange={handleInputChange}
            placeholder="Enter room name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Select Room Image:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={newRoomType.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Room Type
        </button>
      </form>
    </div>
  );
};

export default Dropdown;
