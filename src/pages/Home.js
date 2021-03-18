import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => (
  <div id="home">
    <Navbar />
    <Header />
    <Projects />
    <About />
    <Services />
    <Skills />
    <Contact />
  </div>
);

export default Home;
