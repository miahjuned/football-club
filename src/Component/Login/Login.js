import React from 'react';
import img from '../image/authentication_fsn5.svg';
import './login.css';
import LoginForm from '../Login form/LoginForm';
import LoginWIthSocialMeadia from '../Login with social media/loginWIthSocialMeadia';



const Login = () => {
   
  
    return (
        <div className="container">
            <div className='row m-5 d-flex border border-secondary'>
                {/* image area */}
                
               <div className="col-md-6">
                  {/* <img src={img} alt=""/> */}
                   <div className="loginImg ">
                        <img src={img} alt=""/>
                   </div>
               </div>


               <div className="col-md-6 mt-5 mb-5">
                   <div className="">


                        <div className="btnOptistions">
                            <div className="d-flex  justify-content-center">
                                <button className="btn btn-primary loginBtn" type="button">Login</button>
                                <button className="btn btn-primary signinBtn" type="button">Sign up</button>
                            {/* <button className='btn btn-warning m-5' onClick={handleSignIn}>Sign in</button> */}
                            </div>
                        </div>


                        <div className="">
                            <LoginForm></LoginForm>
                        </div>

                        <div className="">
                            <div className="d-flex">
                                <button className="mt-3 mb-3 btn btn-primary submitBtn" type='submit'>Submit</button>
                            </div>
                        </div>



                        <div className="thirdPartyLogin">
                            <h6 className='text-center '> <small>or</small> <br/> Login using</h6>
                            <LoginWIthSocialMeadia></LoginWIthSocialMeadia>
                            
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Login;