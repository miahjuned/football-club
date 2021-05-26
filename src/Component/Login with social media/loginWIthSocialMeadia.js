import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare,faYoutube , faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FcGoogle } from 'react-icons/fc';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

// Login usign Google

const LoginWIthSocialMeadia = () => {
    const [user, setUser] =useState({});
    // console.log('email', user)
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = (e) =>{
        e.preventDefault();
      firebase.auth().signInWithPopup(provider)
      .then(res => {
        const test =res.user;
        setUser(test);
      })
    }



  // Login usign facebook

    const [fbuser, setFbUser] = useState({});
    const FBprovider = new firebase.auth.FacebookAuthProvider();
    const handleFbSIgnIn =(e) =>{
        e.preventDefault();
      firebase.auth().signInWithPopup(FBprovider)
      .then((result) => {
        var fbUser = result.user;
        setFbUser(fbUser);
        
        // var credential = result.credential;
        // var accessToken = credential.accessToken;
        // console.log('credential', credential);
        // console.log('accessToken', accessToken);
      })
      .catch((error) => {
        var errorCode = error.code;
        alert(errorCode);
        var errorMessage = error.message;
        alert(errorMessage);
        var email = error.email;
        alert(email);
        var credential = error.credential;
        alert(credential);
      });

    }

  // Login usign Github
  const [githubLogin, setGithubLogin] =useState({});
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const handleGithubSIgnIn = () => {
      firebase.auth().signInWithPopup(githubProvider)
      .then((githubResult) => {
        var githubUser = githubResult.user;
        setGithubLogin(githubUser);

        // var credential = githubResult.credential;
        // var token = credential.accessToken;
      }).catch((error) => {
        alert(error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
      });
    }



    return (
      <div>
          <div className=" justify-content-center d-flex mb-3 mt-3">
              <a onClick={handleSignIn} className='btn google'><FcGoogle/></a>
              <a onClick={handleGithubSIgnIn} className='btn github'><FontAwesomeIcon icon={faGithubSquare} /></a>
              <a onClick={handleFbSIgnIn} className='btn facebook'><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a className='btn twitter'><FontAwesomeIcon icon={faTwitterSquare} /></a>
              <a className='btn youtube'><FontAwesomeIcon icon={faYoutube} /></a>
              
          </div>
          <img src={user.photoURL} alt=""/>
              <h6>Name: {user.displayName}</h6> <br/>
              <h6>Email: {user.email}</h6>

          <img src={githubLogin.photoURL} alt=""/>
              <h6>GIthub Name: {githubLogin.displayName}</h6> <br/>
              <h6>GitHub Email: {githubLogin.email}</h6>

          <img src={fbuser.photoURL} alt=""/>
              <h6>FB Name: {fbuser.displayName}</h6> <br/>
              <h6>FB Email: {fbuser.email}</h6>
      </div>
    );
};

export default LoginWIthSocialMeadia;