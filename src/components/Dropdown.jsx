import React, { useEffect, useState } from 'react';

function Dropdown (props) {
     const [data, setData] = useState(null);
    
        useEffect(() => {
            // Fetch data from the backend API
            fetch('http://localhost:5000/api/roomtypes')
                .then((response) => response.json())
                .then((data) => setData(data.message))
                .catch((error) => console.error('Error fetching data:', error));
        }, []);

    return (
        <>
        <h1>This is the Dropdown Component.</h1>
         <div>
                    <h1>{data ? data : 'Loading...'}</h1>
                </div>
                </>
    )
}

export default Dropdown;