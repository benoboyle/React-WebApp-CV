import React from 'react';
import "./Languages.css"
import "./CV.css"

const Languages = () => {
    return (
        <div>
            <h2 className='container-title'> CV </h2>
            <div className='grid-container'>

                <div className='column'>
                    <div className="card">
                        <div className='image-container'>
                        <img src="/bath-logo.png" style={{height: '10rem'}} alt="react-logo"></img>
                        
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Higher Education</h5>
                            <div className='card-text'>
                                <h5>University of Bath</h5>
                                <ul className="list-vertical">
                                    <li> Master's Degree <strong>Computer Science</strong></li>
                                    <li>Bachelor's Degree <strong>Economics with Honours</strong></li>
                                </ul>
                                <p>
                                    Modules including:

                                    <ul className="list-vertical">
                                        <li>Functional Programming in Haskell</li>
                                        <li>Econometrics</li>
                                        <li>Artificial Intelligence</li>
                                        <li>Reinforcement Learning</li>
                                        <li>Cryptography</li>
                                        <li>Software Engineering</li>


                                        <li>Theoretical Computation</li>
                                        <li>Macroeconomics</li>
                                        <li>Dynamic Programming in Python and C</li>
                                        <li>Financial Market Theory</li>
                                        <li>Databases</li>
                                        <li>Microeconomics</li>

                                    </ul>
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className='card'>
                        <img src="/capula-logo.png" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className='card-title'>Graduate</h5>
                            <div>
                                <p>
                                After graduating from my master's, I now currently work 
                                at the british hedge fund Capula Investment Management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className="card">
                        <img src="/oakham-logo.jpeg" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                        <h5 className="card-title">Prior Education</h5>
                            <div className='card-text'>
                                <h5>Oakham School</h5>
                                <ul className="list-vertical">
                                    <li> A Levels & Equiv. <strong>Maths, Physics, Economics, Applied Mathematics*</strong>
                                    </li>
                                </ul>
                                <p>*<a href='https://en.wikipedia.org/wiki/Extended_Project_Qualification#:~:text=Extended%20Project%20Qualification%20(EPQ)%20is,%25%20of%20an%20A%2DLevel.'> Extended Project Qualification </a>
                                    (Dissertation) in Applications of Brownian Motion in
                                    Equity Modelling</p>
                            </div>
                        </div>

                    </div>

                    <div className='card'>
                    <img src="/rbc-logo.svg" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className='card-title'>Placement Year</h5>
                            <div>
                                <p>
                                I was lucky enough to spend my placement year at RBC Brewin, in the research team. For 14
                                months I worked primarily under quantitative strategists and research analysts on improving internal
                                technology infrastructure, database automation, information access and system enhancements. I also
                                spent time on the structured products desk, handling Synthetic zero and autocall products.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Languages;
