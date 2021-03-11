import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Club from './Component/Club/Club';
import NoMatch from './Component/NoMatch/NoMatch';
import Header from './Component/Header/Header';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Header></Header>
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
