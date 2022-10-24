import React from 'react';
import {CodingProjectData,ChemicalProjectData} from './ProjectData'
const Projects = () => {
    return (
        <>
            <div className="mt-5 maxii">
                <h1 className="text-center">Coding Projects</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                            {
                                CodingProjectData.map((i)=>(
                                    <div className="col-md-4 col-10 mx-auto">
                                    <div className="card" style={{minHeight:'85vh'}}>
                                        <img className="card-img-top" src={i.img} alt="Card image cap" style={{ height: "31vh" }} />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>{i.name}</h5>
                                            <p className="card-text">{i.desciption}</p><br></br>
                                            <p className="card-text">{i.tech}</p>
                                            <div style={{display:'flex',justifyContent:'center',position:'absolute',bottom:'20px'}}>
                                            <a href={i.url} className="btn-get-started" target="_blank">Can Check it here</a>&nbsp;
                                            <a href={i.git} className="btn-get-started" target="_blank">Tap here to Visit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center">Core Chemical Projects</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                           {
                            ChemicalProjectData.map((i)=>(
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card">
                                        <img className="card-img-top" src={i.img} alt="Card image cap" style={{ height: "31vh" }}/>
                                        <div className="card-body">
                                            <br></br>
                                            <h5 className="card-title" style={{ textAlign: "center" }}>{i.name}</h5><br></br>
                                            <p className="card-text">{i.desciption}<br></br></p>
                                            <p className="card-text">{i.tech}</p>                                              
                                       </div>
                                    </div>
                                </div>
                            ))
                           }
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Projects;