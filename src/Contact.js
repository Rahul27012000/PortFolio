import emailjs from 'emailjs-com'
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    const [data,setData]=useState({
        Fullname:"",
        phone:"",
        Email:"",
        Msg:"",
    })
    const InputEvent=(event)=>{
      const {name,value}=event.target;
      setData((preval)=>{
          return{
              ...preval,
              [name]:value,
          }
      })
    }

const formSubmit=(e)=>{
e.preventDefault();
alert("Submitted Successfully!!")
emailjs.sendForm('service_tgz6l3n','template_qzmh8vl',e.target,'user_8qS1kBpLps2MVON61rsmQ').then(res=>{
    console.log(res)
    
}).catch(err=>console.log(err));

}



    return (
        <div className="man">
            <div className="my-3">
                <h1 className="text-center">Contact Me</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1" style={{fontSize:'20px'}}>Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="Enter Your Name" />

                            </div>        
                            <div class="form-group">
                                <label for="exampleInputEmail1" style={{fontSize:'20px'}}>Mobile</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Phone" value={data.Phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />

                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="exampleInputEmail1" style={{fontSize:'20px'}}>Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email" value={data.Email} onChange={InputEvent} placeholder="Enter Your Email" />
                                
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" style={{fontSize:'20px'}}>Message/Suggestions</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" name="Msg" value={data.Msg} onChange={InputEvent} placeholder="Enter Your Message/Suggestions"></textarea>
                            </div>
                            <br></br>
                            <br></br>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Contact;