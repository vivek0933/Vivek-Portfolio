import React from "react";
import Navbar from "./components/Navbar/navbar.js";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Project from "./components/Projects/project.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
