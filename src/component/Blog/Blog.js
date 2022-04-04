import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center fw-bold my-5'><span className='text-danger'>Question </span> and <span className='text-success'>Answer</span></h1>
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="p-3 bg-primary bg-opacity-10 answer rounded-3">
                        <h5 className='fw-bold'>What is Semantic Tag...?</h5>
                        <p>
                            Semantic tag is HTML that introduces meaning to the web page rather than just presentation. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                            There are many more semantic HTML tags to use as you build a standards-compliant website. Semantic Tag elements are those that clearly describe their meaning in a human- and machine-readable way.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3 bg-primary bg-opacity-10 answer rounded-3">
                        <h5 className='fw-bold'>What is context API..?</h5>
                        <p>
                        Context API is provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more. component available on the context instance is used to provide the context to its child components, no matter how deep they are,
                        The hook also makes sure to re-render the component when the context value changes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;