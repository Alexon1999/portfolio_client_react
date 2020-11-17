import React from 'react';

import { useLocation, Switch, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './Loader';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ProjectDetail from './ProjectDetail';
import Alerts from './alerts/Alerts';
import AboutMe from './AboutMe/AboutMe';
// import useDatabase from './hooks/useDatabase';

const exitAnimation = {
  from: {
    x: '100vw',
  },
  to: {
    x: 0,
    transition: {
      delay: 1,
    },
  },
  exit: {
    x: 400,
    ease: 'ease',
  },
};

function App() {
  // const [category, setCategory] = useState('tous');
  // const data = useDatabase(category);

  const location = useLocation();

  return (
    <div className='App'>
      <Alerts />
      <Loader />
      <Navbar />

      {/* <AnimatePresence exitBeforeEnter> */}
      <Switch key={location.key} location={location}>
        <Route exact path='/'>
          <motion.div
            // initial={exitAnimation.from}
            // animate={exitAnimation.to}
            className='container'>
            <Home />
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
