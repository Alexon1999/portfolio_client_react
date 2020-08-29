import React, { useRef, useEffect, useState } from 'react';

import Svg from './Svg';

import { motion } from 'framer-motion';
import GithubCalendar from 'github-calendar';

const Projects = ({ data }) => {
  const heading = useRef(null);

  useEffect(() => {
    const scrollHead = () => {
      const windowHalfHeight = window.innerHeight / 2;

      if (windowHalfHeight > heading.current.getBoundingClientRect().top) {
        heading.current.classList.add('active');
      } else {
        heading.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', scrollHead);

    const gihubText = async () => {
      await GithubCalendar('.calendar', 'Alexon1999', {
        responsive: true,
      });
    };

    gihubText();

    return () => {
      window.removeEventListener('scroll', scrollHead);
    };
  }, []);

  const handleClick = (e) => {
    const btns = document.querySelectorAll('.work_menu > .btn');
    btns.forEach((b) => {
      b.classList.remove('btn_primary');
    });

    if (!e.target.classList.contains('btn_primary')) {
      e.target.classList.add('btn_primary');
    }
  };

  const goToGithub = (e) => {
    if (
      e.target.classList.contains('calendar') ||
      e.target.parentElement.classList.contains('calendar') ||
      e.target.parentElement.parentElement.classList.contains('calendar')
    ) {
      const a = document.querySelector(
        '#projects > div > div.calendar > div.position-relative > div > div.contrib-footer.clearfix.mt-1.mx-3.px-3.pb-1 > div.float-left.text-gray > a'
      );
      // window.location.href = a.href;

      // + New tab
      window.open(a.href, '_blank');
    }
  };

  return (
    <section id='projects' className='work_section'>
      <div className='work_section-container'>
        <motion.h1 ref={heading} className='heading'>
          Mes Travails
        </motion.h1>

        <div className='work_heading'>
          <Svg />
        </div>

        <motion.div
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
          onClick={goToGithub}
          className='calendar'></motion.div>

        <div className='work_menu'>
          <a onClick={handleClick} className='btn work_btn btn_primary'>
            Tous
          </a>
          <a onClick={handleClick} className='btn work_btn'>
            Web designs
          </a>
          <a onClick={handleClick} className='btn work_btn'>
            Front-end developpement
          </a>
          <a onClick={handleClick} className='btn work_btn'>
            Back-end developpement
          </a>
        </div>

        <div className='my_works'>
          {data?.map((project) => (
            <motion.div layout className='card'>
              <div className='img-container'>
                <img src='./imgs/finish_task2.png' alt='' />
              </div>
              <div className='card-content'>
                <h1>{project.langages}</h1>
                {project.description && <p>Client Wensite Design</p>}
              </div>
            </motion.div>
          ))}

          {/* <div className='card'>
            <div className='img-container'>
              <img src={'./imgs/rsz_1finish_task2.png'} />
            </div>
            <div className='card-content'>
              <h1>Html / Css</h1>
              <p>Client Wensite Design</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
