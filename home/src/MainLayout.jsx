import React from "react";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Switch>
            <Route path="/" exact component={HomeContent} />
            <Route path="/product/:id" component={PDPContent} />
            <Route path="/cart" component={CartContent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
