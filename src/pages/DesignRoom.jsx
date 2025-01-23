import React, { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import Dropdown2 from '../components/Dropdown2';


function DesignRoom () {
   
   
    
  

    return (
        <>

    <div className='room_type'> <Dropdown  /></div>
   
    <div className='room_item'><Dropdown2 /></div>
    </>
    )
}

export default DesignRoom;