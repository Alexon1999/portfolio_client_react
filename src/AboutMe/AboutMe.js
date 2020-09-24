import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import './AboutMe.css';

import MyImage from './images/Alexon.PNG';

import { useHistory } from 'react-router-dom';

const AboutMe = () => {
  const history = useHistory();

  const [theme, setTheme] = useLocalStorage('light');

  const handleChangeTheme = (mode) => () => {
    console.log('clicked');
    setTheme(mode);
  };

  return (
    <div className='about-me'>
      <section className='s1'>
        <div className='main-container'>
          <div className='greeting-wrapper'>
            <h1 className='heading  heading_1'>
              Bonjour, Je suis Uthayakumar Alexon
            </h1>
          </div>

          <div className='intro-wrapper'>
            <div className='nav-wrapper'>
              <a className='link_a' href='index.html'>
                <div className='dots-wrapper'>
                  <div id='dot-1' className='browser-dot'></div>
                  <div id='dot-2' className='browser-dot'></div>
                  <div id='dot-3' className='browser-dot'></div>
                </div>
              </a>

              <ul id='navigation'>
                <li>
                  <a
                    className='link_a'
                    onClick={() => history.push('/contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className='left-column'>
              <img
                id='profile_pic'
                style={{ borderRadius: '10px' }}
                src={MyImage}
              />
              <h5
                style={{ textAlign: 'center', lineHeight: 0, margin: '2rem' }}
                className='heading  heading_5'>
                Personalisez le Thème
              </h5>

              <div id='theme-options-wrapper'>
                <div
                  data-mode='light'
                  onClick={handleChangeTheme('light')}
                  id='light-mode'
                  className='theme-dot'></div>
                <div
                  data-mode='blue'
                  onClick={handleChangeTheme('blue')}
                  id='blue-mode'
                  className='theme-dot'></div>
                <div
                  data-mode='green'
                  onClick={handleChangeTheme('green')}
                  id='green-mode'
                  className='theme-dot'></div>
                <div
                  data-mode='purple'
                  onClick={handleChangeTheme('purple')}
                  id='purple-mode'
                  className='theme-dot'></div>
              </div>

              <p id='settings-note'>
                *Votre thème sera enrgistré pour
                <br />
                votre prochain visite
              </p>
            </div>

            <div className='right-column'>
              <div id='preview-shadow'>
                <div id='preview'>
                  <div id='corner-tl' className='corner'></div>
                  <div id='corner-tr' className='corner'></div>
                  <h3 className='heading  heading_3'>What I Do</h3>
                  <p>
                    I was a lead developer in a past life, now I enjoy teaching
                    courses.
                  </p>
                  <div id='corner-br' className='corner'></div>
                  <div id='corner-bl' className='corner'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='s2'>
        <div className='main-container'>
          <div className='about-wrapper'>
            <div className='about-me'>
              <h4 className='heading  heading_4'>Plus à propos de moi</h4>

              <p>
                La programmation est ma passion, Ce que me motive c'est
                l'inconnu . Je crée des nouveaux projets personnels juste pour
                m'amuser grâce à cela j'ai pu apprendre plein de chose.
              </p>

              <p>
                <i className='fas fa-laptop-code'></i> je suis engagé dans
                l'apprentissage tout au long de la vie
              </p>

              <hr />

              <h4 className='heading heading_4'>Mon Objectif</h4>

              <p>
                Fullstack developpeur avec objectif principal React(front-end)
                et Back-end(Node Js , PHP-Symfony)
                <a
                  className='link_a'
                  style={{ marginLeft: '1rem' }}
                  target='_blank'
                  href='resume.pdf'>
                  Voir mon CV
                </a>
              </p>

              <h4 className='heading heading_4'>Mes Compétences</h4>

              <div id='skills'>
                <ul>
                  <li>HTML/CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React / React Native</li>
                  <li>Node Js et (Express App)</li>
                  <li>Php (Symfony)</li>
                  <li>Python</li>
                </ul>

                <ul>
                  <li>Github</li>
                  <li>MongoDB</li>
                  <li>MySql</li>
                  <li>Firebase</li>
                  <li>Heroku</li>
                  <li>Google Maps API</li>
                </ul>
              </div>
            </div>

            <div className='social-links'>
              <img id='social_img' src='images/follow.jpg' />
              <h3 className='heading  heading_3'>
                Find me on Twitter & Youtube
              </h3>

              <a
                className='link_a'
                target='_blank'
                href='https://www.youtube.com/c/dennisivy'>
                YouTube: @DennisIvy
              </a>
              <br />
              <a
                className='link_a'
                target='_blank'
                href='https://twitter.com/dennisivy11'>
                Twitter: @DennisIvy11
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
