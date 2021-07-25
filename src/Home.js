import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/growth.svg"


const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <div className="mt-3">
                                        <NavLink to="/about" className="btn-get-started">
                                            See PortFolio
                                        </NavLink>
                                    </div>
                                    <h3>Learn to code with <strong className="brand-name">Rahul Maheshwari</strong></h3>
                                    <h4 className="my-3">
                                        Created this PortFolio Website as Part of My Learning!
                            </h4>


                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Home;