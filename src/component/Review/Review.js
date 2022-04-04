import React from 'react';
import useReviews from '../../Hooks/useReviews';
import StudentReview from '../Home/StudentReview';
import "./review.css"

const Review = () => {
    const [reviews, setReview] = useReviews();
    return (
        <div>
            <h1 className='text-center fw-bold my-4'><span className='text-primary'>Students</span> Reviews</h1>
            <div className="container Review-container my-4">
                {
                    reviews.map(review => <StudentReview
                        key={review.id}
                        review={review}
                    ></StudentReview>)
                }
            </div>
        </div>
    );
};

export default Review;