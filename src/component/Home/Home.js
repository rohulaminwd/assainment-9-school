import React from 'react';
import "./home.css"
import Banner from '../../asset/images/course-1-3.png'

const Home = () => {
    return (
        <div className="bg-success bg-opacity-10 p-3 mt-0">
            <div className='container my-4'>
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-6">
                    <h1 className='display-5 fw-bold'>SCHOOL MANAGEMENT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat dicta consectetur, necessitatibus consequatur nobis nulla consequuntur exercitationem tenetur modi aspernatur doloribus repellat in maiores sit assumenda expedita cumque soluta.</p>
                    <button className='btn btn-outline-success fs-5 border-2 fw-bold rounded-pill px-5'>Over view</button>
                </div>
                <div className="col-md-6">
                    <div className="image d-flex justify-content-center w-100">
                        <img src={Banner} className="img-fluid w-75" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;