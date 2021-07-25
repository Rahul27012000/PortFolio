
import React, { useState } from 'react';

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
alert(`Your Name is ${data.Fullname},Your Mobile Number is ${data.Phone},Your Email is ${data.Email} & Your Message is ${data.Msg}`)
}

    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="Enter Your Name" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Phone" value={data.Phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email" value={data.Email} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
                                
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message/Suggestions</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name="Msg" value={data.Msg} onChange={InputEvent} placeholder="Enter Your Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact;