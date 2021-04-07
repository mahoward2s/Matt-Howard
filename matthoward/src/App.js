import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Applications from "./pages/Applications";
import Collaborations from "./pages/Collaborations";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PersonalProjects from "./pages/PersonalProjects";
import Websites from "./pages/Websites";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/applications" component={Applications} />
          <Route exact path="/collaborations" component={Collaborations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/personalprojects" component={PersonalProjects} />
          <Route exact path="/websites" component={Websites} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
