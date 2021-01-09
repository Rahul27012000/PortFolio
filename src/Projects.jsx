import React from 'react';
import honey from '../src/images/honey.png'
import wwt from '../src/images/wwt.jpg'
import weather from '../src/images/weather.jpg'
import dance from '../src/images/dance.jpg'
import Car from '../src/images/Car.jpg'
const Projects = () => {
    return (
        <>
           <div className="my-5">
                <h1 className="text-center ">My Projects</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={honey} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"center"}}>HoneyPot</h5>
                                            <p className="card-text">I am doing this Project under ISTE.It's a sacrificial computer system that's intended to attract cyberattacks, like a decoy. It mimics a target for hackers, and uses their intrusion attempts to gain information about cybercriminals and the way they are operating or to distract them from other targets.We will be contributing snare and tanner, an open source web application honeypot</p>
                                            <a href="#" className="btn-get-started" >Currently Ongoing</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={wwt} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"center"}}>Waste Water Treatment</h5>
                                            <p className="card-text">I am doing this Project under ISTE.In this project, we explore how water purification is done on an industrial scale. Modelling of Activated Sludge Process which is a widely used process will be done. The model will be implemented using MATLAB-Simulink Software to capture the mathematical model describing the process.</p>
                                            <a href="#" className="btn-get-started" >Currently Ongoing</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={weather} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"center"}}>Weather Website</h5>
                                            <p className="card-text">I have done this as part of my learning via watching tutorials,taking help of Google and Made Modifications as per my choice i have used hbs,NodeJS,ExpressJS and used CSS for designing.</p>
                                            <a href="https://github.com/Rahul27012000/WeatherWebsite" className="btn-get-started" target="_blank">Can Check it here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={dance} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"center"}}>Dance Website</h5>
                                            <p className="card-text">I have done this as part of my learning via watching tutorials,taking help of Google and Made Modifications as per my choice i have used pug,NodeJS,ExpressJS,mongoose and MongoDB for database and used CSS for designing.</p>
                                            <a href="https://github.com/Rahul27012000/DanceWebsite/tree/master" className="btn-get-started" target="_blank">Can Check it here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={Car} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"center"}}>NITK AutoSave</h5>
                                            <p className="card-text">I have done this MiniProject in First Year of My BTech in C language With My Classmate.In This we are making Models of car in such a manner that if any accident Happens then relatives,nearby police and Hospital will get a Message,you can explore it more here</p>
                                            <a href="https://github.com/Rahul27012000/NITK-AutoSave" className="btn-get-started" target="_blank">Can Check it here</a>
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