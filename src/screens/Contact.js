import React from 'react';
import contactImg from '../assets/dis-1.jpg'

function Contact(props) {
    return (
        <div className='container'>
            <div className='row border border-success rounded mt-5'>
                <div className='col p-4'>
                    <div class="card shadow p-3" style={{ width: "25rem;" }}>
                        <div className='card-header text-center'>
                            <h3>Ma'lumotlaringizni qoldiring</h3>
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
                            <a href="#!" class="d-flex justify-content-center btn btn-primary">Send</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <img src={contactImg} alt='contactImg'  className='w-100' />
                </div>
            </div>
        </div>
    );
}

export default Contact;