import React from 'react';
import "./Languages.css"

const Languages = () => {
    return (
        <div>
            <h2 className='container-title'> Languages </h2>
            <div className='grid-container'>

                <div className='column'>
                    <div className="card">
                        <img src="/python-logo.png" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                            <div className='card-text'>
                                Python was the first programming language I was exposed to, way back when I
                                worked with <a href ='https://www.raspberrypi.com' className='btn btn-learn'>Raspberry Pi's
                            </a> in school. I also used it in my EPQ on Brownian motion in equity markets,
                                which earned me an A* during my A-levels. Since then I have used many libraries frequently:
                                pandas, numpy, PyTorch, Quandl, Seaborn, TensorFlow, Pil and many more.
                            
                            </div>
                        </div>

                    </div>

                    <div className='card'>
                        <img src="/sql-database-generic.svg" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className='card-title'>SQL</h5>
                            <div className='card-text'>
                                This is sort of like putting dotnet and C sharp as using a relational database without
                                knowing SQL is hard but it is a language I know and so it stays! It's a very intuitive, natural language
                                "sounding" syntax, however it's very powerful, and useful when combined with python for most data analysis
                                tasks.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className="card">
                        <img src="/html-logo.svg" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">HTML5</h5>
                            <div className='card-text'>
                                I've used HTML quite extensively recently alongside CSS in my web development projects. HTML 
                                (HyperText Markup Language) is the standard language for creating web pages. It structures 
                                content by defining elements such as headings, paragraphs, links, and images, 
                                allowing browsers to display web pages with text, media, and other components.
                                Many people see the language as boiler plate heavy - by that I mean repetitive and boring.
                                Unfortunately I think this leads a lot of young developers into never learning it, which could leave 
                                a large knowledge gap. I actually find writing HTML rather theraputic, due to it's structured and aesthetic
                                and tend to leave HTML writing to weekends and evenings when I prefer less
                                intense and more relaxing work.
                            </div>
                        </div>

                    </div>

                    <div className='card'>
                        <img src="/csharp-logo.png" style={{height: '10rem'}} alt="react-logo"></img>
                        <div className="card-body">
                            <h5 className='card-title'>C#</h5>
                            <div className='card-text'>
                                C sharp is the base language for the .NET framework, so there's no surprise this is here, although it's
                                perhaps one of the most recent languages I have learnt. C# is a modern, object-oriented programming 
                                language developed by Microsoft, primarily used for building applications on the .NET framework. 
                                It’s designed for developing secure, robust applications, from web and desktop to cloud-based 
                                services and games, with a syntax similar to Java and C++.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Languages;
