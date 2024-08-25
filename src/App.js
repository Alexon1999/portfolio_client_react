import React from "react";

import { useLocation, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import PageLoader from "./PageLoader";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectDetail from "./ProjectDetail";
import Alerts from "./alerts/Alerts";
import AboutMe from "./AboutMe/AboutMe";
import MyActivity from "./MyActivity";
import ScrollToTop from "./ScrollToTop";
// import useApi from './hooks/useApi';

const exitAnimation = {
  from: {
    x: "100vw",
  },
  to: {
    x: 0,
    transition: {
      delay: 1,
    },
  },
  exit: {
    x: 400,
    ease: "ease",
  },
};

function App() {
  // const [category, setCategory] = useState('tous');
  // const data = useApi(category);

  const location = useLocation();

  return (
    <div className='App'>
      <ScrollToTop />
      <Alerts />
      <PageLoader />
      <Navbar />

      {/* <AnimatePresence exitBeforeEnter> */}
      <Switch key={location.key} location={location}>
        <Route exact path='/'>
          <motion.div
            // initial={exitAnimation.from}
            // animate={exitAnimation.to}
            className='container'>
            <Home />
            <MyActivity />
            <Projects />
          </motion.div>
        </Route>

        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/project/:id' component={ProjectDetail} />
      </Switch>
      {/* </AnimatePresence> */}

      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
