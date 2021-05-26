import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <div className="input-group mt-3">
                <span className='input-group-text'>Name:</span>
                <input type="text" className='form-control' placeholder='Name' name="" id=""/>


                <span className='input-group-text'>Last Name:</span>
                <input type="text" className='form-control' placeholder='Last Name' name="" id=""/>


            </div>
            <div className="input-group mt-3">
                <span className='input-group-text'>Email:</span>
                    <input type="email" className='form-control' placeholder='Email' name="" id=""/>
            </div>
            <div className="input-group mt-3">
            
                <span className='input-group-text'>Password:</span>
                <input type="password" className='form-control' placeholder='Password' name="" id=""/>
                <div className="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
            </div>
            <div className="input-group mt-3 ">
                <span className='input-group-text'>Confirm Password:</span>
                <input type="password" className='form-control' placeholder='Confirm Password' name="" id=""/>
                
            </div>
        </form>
    );
};

export default LoginForm;