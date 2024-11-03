import React from 'react';
import "./TechStack.css"

const TechStack = () => {
    return (
        <div>
            <h2 className="container-title">Technologies & Frameworks</h2>
            <div className="grid-container">
                
                
                <div className="column">
                    <div className="card">
                        <img src="/angular-logo.png" style={{height: '10rem'}} alt="angular-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title"> Angular </h5>


                            <p className="card-text">
                                Angular is an open-source web application framework developed
                                and maintained by Google. It is a TypeScript-based framework designed for
                                building dynamic, single-page applications. Angular
                                uses a component-based architecture and includes tools like dependency injection,
                                data binding, routing, and form validation. Angular was the first
                                front end framework I learnt, where I used it to build a (pretty rubbish) task manager.
                                It is regarded as one of the more trickier front end frameworks to learn. Angular is
                                considered trickier than React because it is a full-fledged framework with a steeper
                                learning curve, requiring knowledge of concepts like TypeScript, dependency injection,
                                and RxJS. Visit the <a href="https://angular.dev" className="btn btn-learn"> Angular Website
                            </a> to learn more.
                            </p>
                        </div>

                    </div>


                    <div className="card">
                        <img src="/dotnet-logo.png" style={{height: '10rem'}} alt="dotnet-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Dotnet</h5>
                            <p className="card-text"> .NET Core is an open-source, cross-platform framework developed
                                by Microsoft for building modern applications. It supports creating a variety of 
                                software solutions, including web applications, APIs, desktop applications, 
                                cloud-based services, IoT applications, and more. Known for its performance and 
                                scalability, .NET Core allows developers to write applications in C#, F#, and 
                                Visual Basic, and it includes an extensive standard library, built-in 
                                dependency injection, and support for modern DevOps practices. </p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/react-logo.png" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title"> React </h5>

                            <p className="card-text">

                                React is a JavaScript library created by Facebook for
                                building user interfaces, particularly single-page applications. Similarly to Angular,
                                React follows a component-based architecture where the UI is divided into reusable,
                                independent pieces called components. While Angular's opinionated architecture,
                                two-way data binding, and frequent updates add complexity, React’s simpler, flexible,
                                and minimalistic approach focuses mainly on the UI and offers a
                                smoother learning experience. React's one-way data
                                flow and less rigid structure make it easier to start with and more adaptable to various
                                projects. It uses a virtual DOM to
                                optimise rendering performance, making it highly efficient for
                                dynamic and interactive applications. React is the most recent framework I've learnt -
                                the
                                web app you are currently using is built using it! Visit the
                                
                                <a href="https://react.dev" className="btn btn-learn"> React Website </a> to learn more.
                            </p>

                        </div>

                    </div>


                    <div className="card">
                        <img src="/sql-database-generic.svg" style={{height: '10rem'}} alt="sql-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title"> Relational Databases </h5>
                                <p className="card-text">
                            The majority of my database experience has been with relational databases, which started when I studied
                                the area during my masters. My first project was a live airport database app using
                                SQLAlchemy and Flask, which enables you to write SQL queries in a Python domain. SQL is one of the
                                main languages I use at my current role. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;