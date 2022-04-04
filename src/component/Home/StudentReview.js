import React from 'react';
import "./home.css"

const StudentReview = ({review}) => {
    const {name, img, title, ratings} = review;
    return (
        <div className='p-2 rounded-3 border'>
            <div className="">
                <img src={img} alt="" className='img-fluid rounded' />
            </div>
            <div className="text-start my-2">
                <h3 className='fw-bold'>{name}</h3>
                <h6>Rating: {ratings}</h6>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default StudentReview;