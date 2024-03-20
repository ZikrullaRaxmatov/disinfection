import React from 'react';
import contactImg from '../assets/con.jpg'

function Contact() {
    return (
        <div className='container' id='contact' >
            <h1 className='mt-5'>Contact</h1>
            <hr />
            <div className='row border border-success rounded mt-5' data-aos="zoom-in-up" data-aos-duration="2000">
                <div className='col p-4'>
                    <div class="card shadow p-3" style={{ width: "25rem;" }}>
                        <div className='card-header text-center'>
                            <h3>Leave your information</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name..." />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone..." />
                                </div>
                            </form>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} class="d-flex justify-content-center btn">Send</a>
                        </div>
                    </div>
                </div>
                <div className='col p-4'>
                    <img src={contactImg} alt='contactImg' className='w-100 rounded' />
                </div>
            </div>
        </div>
    );
}

export default Contact;