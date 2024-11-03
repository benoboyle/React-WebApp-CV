import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="column">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About me</h5>
                            <p className="card-text">
                                Hi there, my name is Ben O'Boyle. I'm currently based in London UK working for the British
                                hedge fund, Capula LLP. This is a website I built and I have populated it with some of the
                                projects and technologies I've worked on and used, some info about myself, and some
                                more traditional stuff regarding my education and
                                experience.
                            </p>
                            <p className="card-text">
                                Although I am not an expert, I'm always interested in hearing about
                                new technologies or discussing new topics. If you are interested in reaching out
                                please get in contact.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className="card">
                        <div className="card-body">
                            <div className='card-title'>
                                <p className="card-text">
                                    Some text here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Home;