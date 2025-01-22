import React from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router';

function Home (props) {
    return (
    <>
   <div>
            <div className="top-background">
                {/* Content over the background image */}
                <h1 style={{ color: 'white' }}>Welcome to the Home Page</h1>
            </div>
            </div>
    <h1>This is Home.</h1>
    <Carousel />
    <Link to='/services'>
            <div>About The Business</div>
            </Link>
    </>
    )
}

export default Home;