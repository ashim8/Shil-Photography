import React from 'react';

const OtherService = ({ otherservice }) => {
    const { name, img } = otherservice;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> The photography industry continues to thrive rather amicably in the country. With the growing number of options most clients often feel confused at finding the perfect photographer. Finding a reputable photographer can be a tedious job.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <button  className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>

    );
};

export default OtherService;