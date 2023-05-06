import React from 'react'

export default function ReviewPage() {
    return (
        <>
        <div id='reviewNav'></div>
            <div className="reviewHeading">Discover User Experiences</div>
            <div className='reviewPageCont'>
                <div className="reviewBox">
                    <div className='contentBox'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='textBox'>
                                        <div id='reviewText'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, asperiores. Commodi iusto, dolor eveniet vel neque ipsa explicabo ea eaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, similique.</div>
                                        <div id='personName'><i>-Vivek Kumar </i></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='textBox'>
                                        <div id='reviewText'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, asperiores. Commodi iusto, dolor eveniet vel neque ipsa explicabo ea eaque!</div>
                                        <div id='personName'><i>-Vivek Kumar </i></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='textBox'>
                                        <div id='reviewText'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, asperiores. Commodi iusto, dolor eveniet vel neque ipsa explicabo ea eaque!</div>
                                        <div id='personName'><i>-Vivek Kumar </i></div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}








// User opinions featured.
// Check out what others are saying.
// Reviews from happy users.
// See why our customers love us.
// Discover user experiences.
// Hear from our satisfied customers.
// Read real user reviews.
// Check out our users' thoughts.
// Our users speak highly of us.