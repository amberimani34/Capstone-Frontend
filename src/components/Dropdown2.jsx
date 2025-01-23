import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown2 = () => {
  // Initial state is an empty array until data is fetched from the API
  const [roomItems, setRoomItems] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newRoom, setNewRoom] = useState({
    name: '',
    image: '',
  });

  // Fetch room items from the backend 
  useEffect(() => {
    axios
      .get('http://localhost:5001/api/roomitems')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoomItems(response.data); // Ensure the response is an array
        } else {
          console.error('Invalid response data', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching room types:', error);
      });
  }, []);
  const handleRoomChange = (e) => {
    const selected = roomItems.find(room => room.name === e.target.value);
    setSelectedRoom(selected);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({
      ...newRoom,
      [name]: value,
    });
  };

  const handleAddRoom = (e) => {
    e.preventDefault();
    if (newRoom.name && newRoom.image) {
      setRoomItems([...roomItems, newRoom]);
      setNewRoom({ name: '', image: '' }); // Clear input fields
    }
  };

  const handleDeleteRoom = (roomName) => {
    const updatedRoomItems = roomItems.filter(room => room.name !== roomName);
    setRoomItems(updatedRoomItems);
    // Take the room away once deleted
    setSelectedRoom(null);
  };

  return (
    <div className="room-items-manager">
      <h2>Select a Room Item</h2>

      {/* Dropdown for selecting room item */}
      <select onChange={handleRoomChange} value={selectedRoom ? selectedRoom.name : ''}>
        <option value="" disabled>Select a room item</option>
        {roomItems.map((room, index) => (
          <option key={index} value={room.name}>
            {room.name}
          </option>
        ))}
      </select>

      {/* Display image of the selected room item */}
      {selectedRoom && (
        <div className="room-image-container">
          <h3>{selectedRoom.name}</h3>
          <img src={selectedRoom.image} alt={selectedRoom.name} className="room-image" />
          <button onClick={() => handleDeleteRoom(selectedRoom.name)} className="delete-btn">
            Delete {selectedRoom.name}
          </button>
        </div>
      )}

      {/* Form to add a new room item */}
      <h3>Add a New Room Item</h3>
      <form onSubmit={handleAddRoom}>
        <div className="form-group">
          <label htmlFor="name">Room Item:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newRoom.name}
            onChange={handleInputChange}
            placeholder="Enter room item"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Select Room Item Image:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={newRoom.image}
            onChange={handleInputChange}
            placeholder="Images"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Room Item
        </button>
      </form>
    </div>
  );
};

export default Dropdown2;
