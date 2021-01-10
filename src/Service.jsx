import React from 'react';

import web1 from '../src/images/webdev.jpg';
import web2 from '../src/images/Android.jpg';
import web3 from '../src/images/cyber.jpg';
import web4 from '../src/images/GD.jpg';
import web5 from '../src/images/ML.jpg';
import web6 from '../src/images/mern.jpg';


const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center ">Our Services</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img class="card-img-top" src={web1} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Web Development</h5>
                                            <p class="card-text">My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why</p>
                                            <a href="https://www.w3schools.com/whatis/" class="btn-get-started" target="_blank">Learn Web Development </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img class="card-img-top" src={web2} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Android Development</h5>
                                            <p class="card-text">Android was intended to be very customizable. And we welcome innovations</p>
                                            <a href="https://www.w3adda.com/android-tutorial" class="btn-get-started" target="_blank">Learn Android Development </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img class="card-img-top" src={web3} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Cyber Security</h5>
                                            <p class="card-text">Privacy – like eating and breathing – is one of life’s basic requirements</p>
                                            <a href="https://www.w3schools.in/category/cyber-security/" class="btn-get-started" target="_blank">Learn Cyber Security</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img class="card-img-top" src={web4} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Game Development</h5>
                                            <p class="card-text">Gamers can feel when developers are passionate about their games</p>
                                            <a href="https://www.studytonight.com/game-development-in-2D/" class="btn-get-started" target="_blank">Learn Game Development</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img class="card-img-top" src={web5} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Machine learning</h5>
                                            <p class="card-text">Quantum attention functions are the keys to quantum machine learning</p>
                                            <a href="https://www.w3schools.com/python/python_ml_getting_started.asp" class="btn-get-started" target="_blank">Learn Machine learning</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img class="card-img-top" src={web6} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">MERN</h5>
                                            <p class="card-text">Be a MERN Stack Developer by MongoDB,ExpressJS,ReactJS,NodeJS</p>
                                            <a href="https://www.w3schools.com/whatis/whatis_fullstack_js.asp" class="btn-get-started" target="_blank">Learn MERN</a>
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
export default Service;