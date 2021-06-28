import React, { useEffect } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Partners from "../../components/Partners";
import Contact from "../../components/Contact";

const Index = ({ location }) => {
  useEffect(() => {
    if (location.id) {
      document.getElementById(location.id).scrollIntoView(true);
      location.id === "partners" || window.scrollBy(0, -90);
    } else window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Partners />
      <Contact />
    </>
  );
};

export default Index;
