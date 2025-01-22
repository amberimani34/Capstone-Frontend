import React, { useState } from 'react';


const Dropdown2 = () => {
  // State to store the room items
  const [roomItems, setRoomItems] = useState([
    { name: 'Couch', image: 'https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Nightstand', image: 'https://images.pexels.com/photos/30336914/pexels-photo-30336914/free-photo-of-elegant-nightstand-with-lamp-and-water-bottles-in-dubai-hotel.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Lamp', image: 'https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'TV Stand', image: 'https://images.pexels.com/photos/9646741/pexels-photo-9646741.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ]);

  // State for selected room item
  const [selectedRoom, setSelectedRoom] = useState(null);

  // State for the form input (adding new room items)
  const [newRoom, setNewRoom] = useState({
    name: '',
    image: '',
  });

  // Handle change in the dropdown selection
  const handleRoomChange = (e) => {
    const selected = roomItems.find(room => room.name === e.target.value);
    setSelectedRoom(selected);
  };

  // Handle input changes for adding new room item
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({
      ...newRoom,
      [name]: value,
    });
  };

  // Handle form submission to add new room item
  const handleAddRoom = (e) => {
    e.preventDefault();
    if (newRoom.name && newRoom.image) {
      setRoomItems([...roomItems, newRoom]);
      setNewRoom({ name: '', image: '' }); // Clear input fields
    }
  };

  // Handle deletion of a room item
  const handleDeleteRoom = (roomName) => {
    const updatedRoomItems = roomItems.filter(room => room.name !== roomName);
    setRoomItems(updatedRoomItems);
    // Clear the selected room if it was deleted
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