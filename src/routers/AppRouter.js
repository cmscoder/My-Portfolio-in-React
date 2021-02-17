import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../components/About";
import Portfolio from "./../pages/Portfolio";
import Skills from "./../components/Skills";
import Services from "./../components/Services";
import Contact from "./../components/Contact";
import Navbar from "./../components/Navbar";
import Projects from "./../components/Projects";
import NotFoundPage from "./../components/NotFoundPage";
import Modal from "./../components/Modal";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/portfolio">
          <Portfolio component={Modal} />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
