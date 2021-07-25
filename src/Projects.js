import React from 'react';
import honey from '../src/images/honey.png'
import wwt from '../src/images/wwt.jpg'
import weather from '../src/images/weather.jpg'
import dance from '../src/images/dance.jpg'
import Car from '../src/images/Car.jpg'
import flip from '../src/images/flipcart.jpg'
import tinder from '../src/images/Tinder.jpg'
import todo from '../src/images/Todo.jpg'
import port from '../src/images/prt.jpg'
import pix from '../src/images/pixel.jpg'
import biogas from '../src/images/biogas.jpg'
const Projects = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Coding Projects</h1>

                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={flip} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>FlipKart Clone</h5>
                                            <p className="card-text">• Designing a Full-stack Ecommerce Website as part of my learning process.<br></br>
                                                • Building Website Framework using Node.Js and For Database using MongoDB Atlas.<br></br>
                                                • Technologies used: Node.JS ,Express ,MongoDB ,React.JS ,Bootstrap.</p>
                                            <a href="#" className="btn-get-started" >Currently Ongoing</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={port} alt="Card image cap" style={{ height: '195px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Self PortFolio Website</h5>
                                            <p className="card-text">• Designed Complete Frontend PortFolio Website using React and Used Github (gh-pages) for hosting, Has various Sections about Projects, Some Free Websites etc.
                                                <br></br>
                                                • Technologies used: React.JS ,Bootstrap ,Git ,CSS
                                            </p>
                                            <a href="https://github.com/Rahul27012000/PortFolio" className="btn-get-started" target="_blank">Can Check it here</a>&nbsp;
                                            <a href="http://localhost:3000/PortFolio#/about" className="btn-get-started" target="_blank">Tap here to Visit</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={tinder} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Mini Tinder</h5>
                                            <p className="card-text">• Designed Mini Tinder using MERN<br></br><br></br>
                                                • Having Feature of swipping up the Cards,Like,dislike etc <br></br>
                                                • Technologies used: Node.JS ,ExpressJS,MongoDB ,React.JS ,Bootstrap</p>
                                            <a href="https://github.com/Rahul27012000/Tinder" className="btn-get-started" target="_blank">Can Check it here</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={todo} alt="Card image cap" style={{ height: '195px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>To-Do List</h5><br></br>
                                            <p className="card-text">• Designed Complete Frontend To-Do Website using React and Used Github (gh-pages) for hosting,Has One Extra Feature of maintaining your tasks even after refreshing the page or shutting down the PC/laptop.<br></br><br></br>
                                                • Technologies used: React.JS ,Bootstrap ,Git ,CSS <br></br>
                                            </p><br></br>
                                            <a href="https://github.com/Rahul27012000/TodoList/tree/master" className="btn-get-started" target="_blank">Can Check it here</a>&nbsp;
                                            <a href="https://rahul27012000.github.io/TodoList/" className="btn-get-started" target="_blank">Tap here to Visit</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={pix} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>ML based pixel art generation</h5>
                                            <p className="card-text">This is the group project which we will be doing and will be Mentoring under ISTE.The objective of this project is to use Machine Learning to create pixel art from images. We’ll be using Pix2Pix and cycleGAN models which are generally used for image-to-image translation. We’ll be training these models specifically for our use and finding out the results obtained to time taken ratio to find out which model works better.  
</p>
                                            <a href="#" className="btn-get-started" >Currently Ongoing</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={weather} alt="Card image cap" style={{ height: '195px' }}/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Weather Website</h5><br></br>
                                            <p className="card-text">• Done this as part of my learning via watching tutorials,taking help of Google and Made Modifications as per my choice.<br></br>
                                            • As we enter Some City/Place Name, it will give the Current Temperature/Weather of that Place<br></br>
                                            • Technologies Used:hbs,NodeJS,ExpressJS and used CSS for designing.</p><br></br>
                                            <a href="https://github.com/Rahul27012000/WeatherWebsite" className="btn-get-started" target="_blank">Can Check it here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={honey} alt="Card image cap" style={{ height: '195px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>HoneyPot</h5>
                                            <p className="card-text">• Done this Project under ISTE and First of all we have Understood the codebase of SNARE and TANNER<br></br><br></br>
                                                • We came across 3 issues by understanding the codebase is what allowed us to try and rectify those issues.<br></br>
                                                • Keyboard interrupt in SNARE, Unidentified SQLI attacks, Unidentified SQLI attacks</p>

                                        </div>
                                    </div>
                                </div>
                              

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={dance} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Dance Website</h5>
                                            <p className="card-text">I have done this as part of my learning via watching tutorials,taking help of Google and Made Modifications as per my choice i have used pug,NodeJS,ExpressJS,mongoose and MongoDB for database and used CSS for designing.</p>
                                            <a href="https://github.com/Rahul27012000/DanceWebsite/tree/master" className="btn-get-started" target="_blank">Can Check it here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={Car} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>NITK AutoSave</h5>
                                            <p className="card-text">I have done this MiniProject in First Year of My BTech in C language With My Classmate.In This we are making Models of car in such a manner that if any accident Happens then relatives,nearby police and Hospital will get a Message,you can explore it more here.</p>
                                            <a href="https://github.com/Rahul27012000/NITK-AutoSave" className="btn-get-started" target="_blank">Can Check it here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center">Core Chemical Projects</h1>

                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">

                              
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={wwt} alt="Card image cap" />
                                        <div className="card-body">
                                        <br></br>
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Waste Water Treatment</h5><br></br><br></br>
                                            <p className="card-text">I am doing this Project under ISTE.In this project, we explore how water purification is done on an industrial scale. Modelling of Activated Sludge Process which is a widely used process will be done.<br></br><br></br>
                                             The model will be implemented using MATLAB-Simulink Software to capture the mathematical model describing the process.<br></br></p><br></br>
                                            <a href="#" className="btn-get-started">Done</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={biogas} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Modelling and Simulation for Biogas Production from Organic Waste</h5>
                                            <p className="card-text">This is the group project which we will be doing and will be Mentoring under ISTE, The objective of the project is to explore how the biogas production in Industrial scale from the Organic wastes can be mathematically modeled in a largely known process called the ADM(Anaerobic Digestion Method). The simulation of this method through the Anaerobic digestion of organic wastes is being done in the process.</p>
                                            <a href="#" className="btn-get-started">Currently Ongoing</a>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;