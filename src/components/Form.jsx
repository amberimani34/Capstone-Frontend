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
    // e.preventDefault();
    console.log('Form submitted:', formData);
  };

//   const isConfirmed = window.confirm("Are you sure you want to book this?");

//   if (isConfirmed) {
//     alert('Your booking has been confirmed!');
//   } else {
//     alert('Booking was canceled.');
//   }
// };


const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');

const handleDateChange = (e) => {
  setSelectedDate(e.target.value);
};

const handleTimeChange = (e) => {
  setSelectedTime(e.target.value);
};

const handleBookHereClick = () => {
  // User has to select both date and time
  if (selectedDate && selectedTime) {
    // Once you click Book consultation now btn, the below will show in an alert
    const isConfirmed = window.confirm(`You selected: Date - ${selectedDate}, Time - ${selectedTime}. Confirm your booking?`);
  
    if (isConfirmed) {
      window.alert(`Your booking has been confirmed for ${selectedDate} at ${selectedTime}.`);
    } else {
      window.alert('Your booking was canceled.');
    }
  } else {
    window.alert('Please select both a date and a time to confirm your booking.');
  }
};


  return (
    <div className="form-container">
      <h2>Book Your Consultation</h2>
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
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>

        <button onClick={handleBookHereClick} className="submit-btn">
          Book Consultation Now!
        </button>
      </form>
    </div>
  );
};

export default Form;