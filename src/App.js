import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
