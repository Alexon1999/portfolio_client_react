import React, { useEffect, useState, useRef } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from './axios/axios';

import Loader from './Loader';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/projects');
        setData(data);
      } catch (err) {
        console.log(err.response.data?.msg);
      }
    };

    const loader = () => {
      const navbar = document.getElementById('navbar');
      const loader = document.getElementById('loader');

      if (document.body.classList.contains('overflow')) {
        document.body.classList.remove('overflow');
      }

      navbar.classList.add('show');
      loader.classList.add('finished');
    };

    fetchData();

    window.addEventListener('load', loader);

    return () => {
      window.removeEventListener('load', loader);
    };
  }, []);

  return (
    <div className='App'>
      <Router>
        <Loader />
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <div className='container'>
              <Home />
              <Projects data={data} />
            </div>
          </Route>

          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>

        {/* <Contact /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
