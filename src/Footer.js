import React from 'react';

const Footer = () => {
  return (

   <footer className="footer">
    <div class="container-fluid pt-1">
        <div class="row pt-0">
          <div class="col-md-9">
            <p class="text-white">Created by Rahul Maheshwari😎</p>
          </div>
          <div class="col-md-3">
            <div class="d-inline-block">
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
        </div>
      </div>
  </footer>
  
   
  )
}
export default Footer;
