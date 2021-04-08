import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path={["/matthoward","/home"]}> 
          <Home />
          </Route>
          <Route exact path={["/about"]}> 
          <About />
          </Route>
          <Route exact path={["/applications"]}> 
          <Applications />
          </Route>
          <Route exact path={["/collaborations"]}> 
          <Collaborations />
          </Route>
          <Route exact path={["/contact"]}> 
          <Contact />
          </Route>
          <Route exact path={["/personalprojects"]}> 
          <PersonalProjects />
          </Route>
          <Route exact path={["/websites"]}> 
          <Websites />
          </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
