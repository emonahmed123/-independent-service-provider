import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const{name ,describe,img}= service
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card   " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{describe}</p>
                     <Link to='/cheakout' className="btn btn-primary">Cheakout</Link> 
                </div>
            </div>
        </div>
    );
};

export default SingleService;