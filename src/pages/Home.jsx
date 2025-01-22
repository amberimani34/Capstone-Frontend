import React from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router';

function Home (props) {
    return (
    <>
   <div>
            <div className="top-background">
                {/* Content over the background image */}
                <h1 style={{ color: 'black' }}>Imani Carolyn Beauty Organization & Design</h1>
            </div>
            </div>
    <div className="designer">
        <img className="headshot" src="https://media.licdn.com/dms/image/v2/D4D03AQF3ZwQSAiSLzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730298075618?e=1743033600&v=beta&t=CArWgRMPA4Jg6ykEbJTGzc2PU-F16I8t8dQzsILSq-Q" alt="photo of me" />
        <div className="text">
        <h1>About The Designer</h1>
        <p>My name is Amber Roberts, and while I love all things art & creativity, my passion is in Interior Design & Organization. I have been doing this for 5 years and love every single project I do big and small. Every project I take on is an opportunity to combine my design expertise with my organizational skills to curate a space that balances beauty, comfort, and efficiency. I strive to understand each client's vision and bring it to life in a way that reflects their style and meets their functional needs.
            

I'm always excited to take on new projects and collaborate with people who value good design and organized living. If you're looking for a fresh perspective on your space, feel free to reach out—I would love to work with you!</p>
        </div>
        </div>
    <Carousel />
    <div>
    <Link to='/services'>
            <div><h1>About The Business</h1></div>
            </Link>

            </div>
    </>
    )
}

export default Home;