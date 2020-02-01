import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/SignupPage";
import SearchPage from "./Pages/SearchPage";
import Test from "./Components/test";
import { Provider } from "./context/authContext";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/search" component={SearchPage} />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
