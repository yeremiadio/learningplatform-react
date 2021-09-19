import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/LandingPage";
import NotFound404 from "./pages/NotFound";
import StyleGuide from "./components/StyleGuide";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/styleguide" component={StyleGuide} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/*" component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
