import React from 'react';
import "./home.css"
import { FaStar } from 'react-icons/fa';

const StudentReview = ({review}) => {
    const {name, img, title, ratings} = review;
    
    return (
        <div className='p-2 rounded-3 border'>
            <div className="">
                <img src={img} alt="" className='img-fluid rounded' />
            </div>
            <div className="text-start my-2">
                <h3 className='fw-bold'>{name}</h3>
                <h6>Rating:  <span className='fw-bold text-danger'>{ratings.map(i => <FaStar />)}</span></h6>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default StudentReview;