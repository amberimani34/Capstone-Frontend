Interior Design Frontend
This is the frontend of the Interior Design application built with React.js. It allows users to view and interact with room types used in the interior design process, including names & images.


This frontend uses the following technologies:

React.js - JavaScript library for building user interfaces.
React Router - For routing and navigation within the application.
Axios - HTTP client for making requests to the backend API.
CSS - For styling the application (you can use CSS frameworks like Tailwind, Material UI, or write custom CSS).
Getting Started
Follow these steps to get the frontend running locally.

Installation
Clone the repository to your local machine:

git clone https://github.com/amberimani34/Capstone-Frontend.git
cd Capstone-Frontend
Install dependencies:

You need Node.js installed on your machine. After that, install the required dependencies using npm:


npm install



Make sure that the backend server is running and accessible. 
After completing the above steps, start the React development server:


npm run dev
This will start the frontend server on http://localhost:3000. You can open the application in your web browser.

Running the Application
Once you've set everything up, you can run the application in development mode by running:

npm run dev
This will open the app in the browser at http://localhost:3000. The app will automatically reload if you make changes to the source code.

Folder Structure
Here’s a breakdown of the folder structure in the frontend app:


/interior-design-frontend
│
├── /public                # Static assets like index.html, images, etc. 
    --- /images
├── /src                   # Source code for the application
│   ├── /components        # Reusable React components (e.g., RoomCard, Navbar)
│   ├── /pages             # React pages (e.g., Home, RoomTypesList)
│   ├── /App.js            # Main application component
│   ├── /index.js          # Entry point for React
│   └── /App.css        # Global styles (can use a CSS framework or custom styles)
├── /node_modules          # Node dependencies
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation (this file)
/components: Contains reusable UI components Carousel, Carousel2, Dropdown, Dropdown2, Form, & Nav
/pages: Contains components that represent entire pages, Home, Services, BookHere, DesignRoom
/App.js: The main component that sets up routing and renders pages.
API Integration
The frontend communicates with the backend using Axios. Here’s an example of how to fetch data from the backend:


import React, { useState, useEffect } from "react";
import axios from "axios";

function RoomTypesList() {
  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/roomtypes")  // Backend API endpoint
      .then((response) => {
        setRoomTypes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room types:", error);
      });
  }, []);

  return (
    <div>
      <h1>Room Types</h1>
      <div>
        {roomTypes.map((room) => (
          <div key={room._id}>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <img src={room.image} alt={room.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomTypesList;
This component fetches the room types & room items from the backend and displays both names and corresponding images in the dropdown components on the designroom page.

