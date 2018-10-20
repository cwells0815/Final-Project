import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import findAfilm from "./pages/findAfilm";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Callback from "./components/Callback";
import NavTabs from "./pages/NavTabs";
import Auth from './Auth/Auth';
import SecuredRoute from "./components/SecuredRoute";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


class App extends React.Component {
  render() {
    return (
      <Router >

        <div className="total-wrapper">
          <div className="scroll-wrapper">
            <NavTabs />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Favorite" component={Favorite} />
              <Route exact path="/findAfilm" component={findAfilm} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signin" render={() => <SignIn auth={auth} />} />
              <Route exact path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} auth={auth} />
              }} />
            </Switch>
          </div>
        </div>

      </Router>

    )
  }
};

export default App;
