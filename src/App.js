import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Club from './Component/Club/Club';
import NoMatch from './Component/NoMatch/NoMatch';
import Header from './Component/Header/Header';
// import * as firebase from "firebase/app";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
import Login from './Component/Login/Login';


// firebase.initializeApp(firebaseConfig);



function App() {

  // const provider = new firebase.auth.GoogleAuthProvider();
  // const handleSignIn = () =>{
  //   firebase.auth().signInWithPopup(provider)
  //   .then(res => {
  //     const {displayName, photoURL, email} =res.user;
  //     console.log(displayName, photoURL, email);
  //   })
  // }

  return (

    <Router>
      {/* <button onClick={handleSignIn}>Sign in</button> */}
      <Switch>
        <Route path='/home'>
          <Header></Header>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path="/club/:clubID">
          <Club/>
        </Route>
        <Route exact path="/">
          <Header></Header>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
