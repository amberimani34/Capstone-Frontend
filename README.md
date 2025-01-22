Interior Design Frontend
This is the frontend of the Interior Design application built with React.js. It allows users to view and interact with room types used in the interior design process, including images, descriptions, and features.


This frontend uses the following technologies:

React.js - JavaScript library for building user interfaces.
React Router - For routing and navigation within the application.
Axios - HTTP client for making requests to the backend API.
CSS - For styling the application (you can use CSS frameworks like Tailwind, Material UI, or write custom CSS).
Getting Started
Follow these steps to get the frontend running locally.

Installation
Clone the repository to your local machine:

git clone https://github.com/yourusername/interior-design-frontend.git
cd interior-design-frontend
Install dependencies:

You need Node.js installed on your machine. After that, install the required dependencies using npm or yarn:


npm install
or if you use yarn:


yarn install
Set up API endpoint:

Make sure that the backend server is running and accessible. You may need to configure the API base URL in your app to point to the backend.

Open src/api.js or the file where you're making HTTP requests and update the API base URL if necessary:

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend API URL
Run the application:

After completing the above steps, start the React development server:


npm start
This will start the frontend server on http://localhost:3000. You can open the application in your web browser.

Running the Application
Once you've set everything up, you can run the application in development mode by running:

npm start
This will open the app in the browser at http://localhost:3000. The app will automatically reload if you make changes to the source code.

Folder Structure
Here’s a breakdown of the folder structure in the frontend app:


/interior-design-frontend
│
├── /public                # Static assets like index.html, images, etc.
├── /src                   # Source code for the application
│   ├── /components        # Reusable React components (e.g., RoomCard, Navbar)
│   ├── /pages             # React pages (e.g., Home, RoomTypesList)
│   ├── /api.js            # API calls and configuration for backend requests
│   ├── /App.js            # Main application component
│   ├── /index.js          # Entry point for React
│   └── /styles.css        # Global styles (can use a CSS framework or custom styles)
├── /node_modules          # Node dependencies
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation (this file)
/components: Contains reusable UI components like RoomCard, Navbar, etc.
/pages: Contains components that represent entire pages, such as Home, RoomTypesList.
/api.js: Contains the logic for interacting with the backend API.
/App.js: The main component that sets up routing and renders pages.
API Integration
The frontend communicates with the backend using Axios (or fetch if you prefer). Here’s an example of how to fetch data from the backend:


import React, { useState, useEffect } from "react";
import axios from "axios";

function RoomTypesList() {
  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/roomtypes")  // Backend API endpoint
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
This component fetches the room types from the backend and displays them. You can use this pattern across other components to interact with the backend.

Contributing
Contributions are welcome! If you'd like to improve this project, feel free to open an issue or submit a pull request.

Steps for contributing:
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push your branch (git push origin feature/your-feature).
Open a pull request.