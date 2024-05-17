import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { homeSection } from "../data/HomeSection";
import { aboutSection } from "../data/AboutSection";

import "../styles/HomeSection.css";

import parse from "html-react-parser";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Section HOME */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* Section About */}
        <section id="about">
          <div className="kolom">{parse(aboutSection.content)}</div>
          <img src={aboutSection.image} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
