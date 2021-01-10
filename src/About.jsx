import React from 'react';
import Rahul from '../src/images/rahul.jpg'
import iste from '../src/images/iste.jpg'
import jnv from '../src/images/jnv.jpg'
import frd from '../src/images/frd.jpg'
import frd1 from '../src/images/frd 1.jpeg'
import frd2 from '../src/images/frd1.jpeg'
import nitk from '../src/images/nitk.jpg'
import nitk2 from '../src/images/nitk2.jpg'
import hesc from '../src/images/hesc.jpg'
import beach from '../src/images/beach.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import Typed from 'react-typed'
import Particles from 'react-particles-js';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const About = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      />
      <div className="gif-bg">
        <div className="container-fluid custom-jumbotron" id="home">
          <div className="row">
            <div className="col-lg-12">
              <header className="cen">
                <h1 className="main-header animated bounceInLeft">Hello, I'm Rahul😎</h1>
                <p className="main-sub-header animated bounceInRight"><b> Second Year Undergraduate</b> student studying <b>Chemical Engineering</b> at <b>National Institute of Technology, Karnataka</b>.</p>
                <Typed
                  className="typed-text"
                  strings={["Love to Code", "Web Development", "Ex Navodian from JNV Rajsamand", "Love Badminton", "Love Photography", "Love Sleeping too🤣🤣"]}
                  typeSpeed={100}
                  backSpeed={60}
                />

              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="container introduction-container" id="introduction">
            <div className="row">
            <div className="col-sm-3 mx-auto">
                    <img className="img-thumbnail profile-pic" src={Rahul} alt="profile image" />
                </div>
                <div className="col-md-9 introduction-content mx-auto">
                <h6><span className="bold-content">Full Name:</span> Rahul Maheshwari😎</h6>
                <h6>Second Year Undergraduate</h6>
                <h6>Web Developer</h6>
                <h6>Love To Code and Photography in Veins💖</h6>
                
                </div>
            </div>
        </div>

       
        <h2 style={{textAlign:"center"}}>Know More About Me ⬇⬇⬇⬇⬇</h2>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton style={{ color: "skyblue" }}>
              Me😎
                    </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Hey Friends,I am Rahul (Naam toh Suna hi hoga😂😂) Born in Udaipur Rajasthan,My Nick Name is Raj its not bcz i am from some shahi Raj gharana but because I like this Name Lol.
                    </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton style={{ color: "yellowgreen" }}>
              Schooling
                    </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I have passed My 10th Class From Jawahar Navodaya Vidyalaya Rajsamand and 12th Class from Jawahar Navodaya Vidyalaya Bangalore Urban along with my JEE Preparation in Dakshana Foundation.
                    </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton style={{ color: "brown" }}>
              Graduation
                    </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Sophomore in Chemical Engineering at National Institute of Technology Karnataka Surathkal
              Currently in 4th Semester.
                    </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton style={{ color: "blue" }}>
              Hobbies
                    </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I love Playing Badminton,Listening Songs,Writing Poems and Photography.
                    </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton style={{ color: "purple" }}>
              Extra
                    </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I love doing Web development and making websites to learn something new everytime using different modes.I also do Competetive Programing for enhancement of Brain Practise.
              I am part of ISTE Technical Club and in its Web Development Team in NITK and HESC literature Club of NITK.
                    </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <br></br>
      <br></br>
      <h2 style={{ textAlign: "center" }}>My Journey</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jnv}
            alt="jnv"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>JNV Rajsamand</h3>
            <p style={{ color: "black" }}>The Place Where I have started My Life Journey in a Different way</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={nitk2}
            alt="NITK"
          />

          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>NITK</h3>
            <p style={{ color: "aquamarine" }}>One of the Prestigeous College of INDIA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={nitk}
            alt="nitk"
          />

          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>NITK</h3>
            <p style={{ color: "aquamarine" }}>In Top 3 NITs of India</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={beach}
            alt="beach"
          />

          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>College with its Private Beach</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frd}
            alt="frd"
          />

          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>School Friends</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frd2}
            alt="frd"
          />

          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>College Friends</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frd1}
            alt="frd"
          />

          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>Fresher's Cup</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={iste}
            alt="ISTE"
          />
          <Carousel.Caption>
            <h3 style={{ color: "aquamarine" }}>ISTE</h3>
            <p style={{ color: "aquamarine" }}>The Indian Society for Technical Education</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hesc}
            alt="hesc"
          />

          <Carousel.Caption>
            <h3 style={{ color: "brown" }}>HESC</h3>
            <p style={{ color: "brown" }}>Hindi Evam Sanskrit Club</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <div className="container-fluid contact-container" id="contact">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="header">Contact Me</h2>
            <p className="sub-header">Don't hesitate to contact me if you have any questions. I accept every feedback and general queries😂😂.</p>
            <div className="col-md-12 social">
            <div className="d-inline-block">
              <div className="bg-circle-outline d-inline-block">
                <a href="https://www.facebook.com/rahul.maheshwari.7967747" target="_blank" className="text-white"><i className="fa fa-2x fa-fw fa-facebook" ></i>
                </a>
              </div>
              <div className="bg-circle-outline d-inline-block">
                <a href="https://www.instagram.com/i_m__rahul_27/" target="_blank" className="text-white"><i className="fa fa-2x fa-fw fa-instagram"></i>
                </a>
              </div>

              <div className="bg-circle-outline d-inline-block">
                <a href="https://twitter.com/RahulMa25772691?s=08" target="_blank" className="text-white">
                  <i className="fa fa-2x fa-fw fa-twitter" /></a>
              </div>

              <div className="bg-circle-outline d-inline-block">
                <a href="https://www.linkedin.com/in/rahul-maheshwari-b2780a1b0/" target="_blank" className="text-white">
                  <i className="fa fa-2x fa-fw fa-linkedin"></i></a>
              </div>
            </div>
          </div>
            <p className="wtsup mx-auto"><i style={{ color: "green" }} className="fa fa-whatsapp" aria-hidden="true"></i>8290412782</p>
            <p id="email-btn" className="email">rajmaheshwari27012000@gmail.com</p>
            <p id="email-btn" className="email">rahulmaheshwari27012000@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;
