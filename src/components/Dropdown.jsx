import React, { useState } from 'react';

const Dropdown = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [roomTypesData, setRoomTypesData] = useState([

    { name: 'Living Room', image: 'https://images.pexels.com/photos/12742348/pexels-photo-12742348.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Bedroom', image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Kitchen', image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Office', image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Closet', image: 'https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ]);

  const [newRoomType, setNewRoomType] = useState({
    name: '',
    image: '',
  });

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
      <h2>Select or Add a Room Type</h2>

      {/* Dropdown for selecting a room type */}
      <select onChange={handleRoomChange} defaultValue="">
        <option value="" disabled>Select a room type</option>
        {roomTypesData.map((room, index) => (
          <option key={index} value={room.name}>
            {room.name}
          </option>
        ))}
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
          <label htmlFor="image">Room Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={newRoomType.image}
            onChange={handleInputChange}
            placeholder="Enter image URL"
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
