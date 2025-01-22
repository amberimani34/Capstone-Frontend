import React, { useState } from 'react';


const Form = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: '',
    serviceType: '',
    calendar: '',
    time: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your submission logic (e.g., send data to a backend)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Book Your Interior Design Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="">Select a room</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="office">Office</option>
            <option value="closet">Closet</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type:</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="design">Design</option>
            <option value="organization">Organization</option>
            <option value="staging">Staging</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="calendar">Calendar:</label>
          <input
            type="date"
            id="calendar"
            name="calendar"
            value={formData.calendar}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Book Here
        </button>
      </form>
    </div>
  );
};

export default Form;