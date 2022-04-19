import React from 'react';

import img1 from '../../../images/conference.png';
import img2 from '../../../images/graduation.png';
import img3 from '../../../images/school1.png';
import OtherService from '../OtherService/OtherService';

const experts = [
    {id: 1, name: 'Conference', img: img1},
    {id: 2, name: 'Ceremony', img: img2},
    {id: 3, name: 'School', img: img3}
   
]

const OtherServices = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center mt-5'>Other Services</h2>
            <div className="row">
                {
                    experts.map(otherservice => <OtherService
                        key={otherservice.id}
                        otherservice= {otherservice}
                    ></OtherService>)
                        
                }
            </div>
        </div>
    );
};

export default OtherServices;