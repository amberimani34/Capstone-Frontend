import React from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router';

function Home (props) {
    return (
    <>
    <h1>This is Home.</h1>
    <Carousel />
    <Link to='/services'>
            <div>About The Business</div>
            </Link>
    </>
    )
}

export default Home;