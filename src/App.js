import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from './Loader';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import ProjectDetail from './ProjectDetail';
import Alerts from './alerts/Alerts';
import AboutMe from './AboutMe/AboutMe';
// import useDatabase from './hooks/useDatabase';

function App() {
  // const [category, setCategory] = useState('tous');
  // const data = useDatabase(category);

  useEffect(() => {
    const loader = () => {
      const navbar = document.getElementById('navbar');
      const loader = document.getElementById('loader');

      if (document.body.classList.contains('overflow')) {
        document.body.classList.remove('overflow');
      }

      navbar.classList.add('show');
      loader.classList.add('finished');
    };

    window.addEventListener('load', loader);

    return () => {
      window.removeEventListener('load', loader);
    };
  }, []);

  return (
    <div className='App'>
      <Alerts />
      <Router>
        <Loader />
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <div className='container'>
              <Home />
              <Projects />
            </div>
          </Route>

          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={AboutMe} />
          <Route exact path='/project/:id' component={ProjectDetail} />
        </Switch>

        {/* <Contact /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
