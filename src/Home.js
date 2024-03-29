import React from 'react';

import mobile from './imgs/mobile.png';

import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleHlick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const href = e.target.hash; // '#projects'
    const offsetTop = document.querySelector(href).offsetTop;

    console.log({ href, offsetTop });

    window.scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className='home_section'>
      <div className='section_content'>
        <motion.div
          initial={{ opacity: 0, y: '-150px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeIn', duration: 1 }}
          className='heading'>
          <p>Bonjour ! Je suis Alexon , Front/Back End Developpeur</p>
          <h1>
            Je vais vous aider à créer votre projet de rêve et cultiver des
            liens entre votre produit et vos utilisateurs
          </h1>
        </motion.div>

        <div className='navigation'>
          <motion.a
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeIn',
              delay: 0.5,
              duration: 1,
            }}
            href='#projects'
            onClick={handleHlick}
            className='btn btn_primary'>
            Reagardez mes travaux
          </motion.a>

          <motion.a
            onClick={(e) => {
              e.preventDefault();
              history.push('/contact');
            }}
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeIn',
              delay: 0.5,
              duration: 1,
            }}
            id='contact'
            className='btn btn_secondary'>
            Contactez moi
          </motion.a>
        </div>
      </div>

      <div className='mouse'>
        <div className='mouse-icon'>
          <span className='mouse-wheel'></span>
        </div>
      </div>

      <div className='mobile_container'>
        <img src={mobile} className='mobile_img' alt='' />
      </div>
    </section>
  );
};

export default Home;
