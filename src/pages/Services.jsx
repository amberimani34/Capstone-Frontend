import React from 'react';
import Carousel2 from '../components/Carousel2';

function Services () {
    return (
        <>
    <Carousel2 />
    <hr />
    <h1 className='services'>Services By Room Type</h1>
    <div className='pricing'>
    <div className='closetrate'>
        <h2 className='servicestitle'>Closet:</h2>
        <div className='block'>
        <img className='servicesphotoslong' src="/images/IMG_4205.PNG" alt="closetphoto" />
        <div className='h4block'>
        <h4>Interior Design Hourly Rate $30</h4>
        <h4>Organization Hourly Rate $30</h4>
        </div>
       
       </div> 
        </div>
        <br />
        <div className='bedroomrate'>
        <h2 className='servicestitle'>Bedroom:</h2>
        <div className='block'>
        <img className='servicesphotos' src="/images/IMG_2868.JPG" alt="bedroomphoto" />
        <div className='h4block'>
        <h4>Interior Design Hourly Rate $45</h4>
        <h4>Organization Hourly Rate $45</h4>
        </div>
       
       </div> 
        </div>
        
        <br />
        
        
        <div className='livingroomrate'>
        <h2 className='servicestitle'>Living Room:</h2>
        <div className='block'>
        <img className='servicesphotos' src="/images/IMG_2864.JPG" alt="livingroomphoto" />
        <div className='h4block'>
        <h4>Interior Design Hourly Rate $45</h4>
        <h4>Organization Hourly Rate $45</h4>
        </div>
       
       </div> 
        </div>
            <br />
        <div className='otherrate'>
        <h2 className='servicestitle'>Play Room/Other:</h2>
        <div className='block'>
        <img className='servicesphotoslong' src="/images/IMG_5039.jpg" alt="playroomphoto" />
        <div className='h4block'>
        <h4>Interior Design Hourly Rate $40</h4>
        <h4>Organization Hourly Rate $40</h4>
        </div>
       
       </div> 
        </div>
        
        <br />
        <div className='kitchenrate'>
        <h2 className='servicestitle'>
            Kitchen:</h2>
        <div className='block'>
        <img className='servicesphotos' src="/images/IMG_0937.JPG" alt="kitchenphoto" />
        <div className='h4block'>
        <h4>Interior Design Hourly Rate $30</h4>
        <h4>Organization Hourly Rate $30</h4>
        </div>
       
       </div> 
        </div>


    </div>
    </>
    )
}

export default Services;