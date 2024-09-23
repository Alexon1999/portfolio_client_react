import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import "./AboutMe.css";

import MyImage from "./images/Alexon.PNG";

import { useHistory } from "react-router-dom";

const AboutMe = () => {
  const history = useHistory();

  const [theme, setTheme] = useLocalStorage("light");

  const handleChangeTheme = (mode) => () => {
    console.log("clicked");
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
              <a className='link_a' onClick={() => history.push("/")}>
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
                    onClick={() => history.push("/contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className='left-column'>
              <img
                id='profile_pic'
                style={{ borderRadius: "10px" }}
                src={MyImage}
              />
              <h5
                style={{
                  textAlign: "center",
                  lineHeight: 0,
                  fontSize: "1.2rem !important",
                  margin: "1.7rem 0rem 0.5rem",
                }}
                className='heading  heading_5'>
                Personalisez le Thème
              </h5>

              <div id='theme-options-wrapper'>
                <div
                  data-mode='light'
                  onClick={handleChangeTheme("light")}
                  id='light-mode'
                  className='theme-dot'></div>
                <div
                  data-mode='blue'
                  onClick={handleChangeTheme("blue")}
                  id='blue-mode'
                  className='theme-dot'></div>
                <div
                  data-mode='green'
                  onClick={handleChangeTheme("green")}
                  id='green-mode'
                  className='theme-dot'></div>
                <div
                  data-mode='purple'
                  onClick={handleChangeTheme("purple")}
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
                  <h3 className='heading  heading_3'>Qu'est ce que je fais?</h3>
                  <p>Je suis Développeur Full Stack & DevOps</p>
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
                Je me spécialise dans le développement full stack, le DevOps, et
                les technologies cloud. Mon expertise couvre tout le cycle de
                vie du développement logiciel, de la collecte des besoins à la
                conception de systèmes, en passant par la modélisation de bases
                de données, le développement d'API backend et d'interfaces
                frontend. J'ai également de l'expérience en analyse et la
                science des données, ainsi que dans la mise en place de
                pipelines CI/CD et le monitoring d'infrastructures cloud, en
                utilisant des outils DevOps pour optimiser et gérer efficacement
                les environnements cloud.
              </p>

              <p>
                🔍 Ce que je fais :
                <ul>
                  <li>- Développement Full Stack</li>
                  <li>- DevOps</li>
                  <li>- Analyse de données et Data Science</li>
                </ul>
              </p>

              <hr />

              <h4 className='heading heading_4'>Mon Objectif</h4>

              <p>
                Toujours en quête de nouveaux défis, je cherche constamment à
                progresser dans ma carrière.
              </p>
              <p>
                N'hésitez pas à consulter mon profil GitHub ou mon CV pour
                découvrir certains de mes projets.
                <a
                  className='link_a'
                  style={{ marginLeft: "1rem" }}
                  target='_blank'
                  href='AlexonUthayakumar.pdf'>
                  Voir mon CV
                </a>{" "}
                <span>| </span>
                <a href='https://github.com/Alexon1999' target='_blank'>
                  Voir Github
                </a>
              </p>

              <hr />

              <h4 className='heading heading_4'>Mes Compétences</h4>

              <div id='skills'>
                <ul>
                  <li>HTML/CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java / Quarkus</li>
                  <li>C# &amp; .NET</li>
                  <li>React Js / React Native</li>
                  <li>Vue Js</li>
                  <li>Node Js et (Express App)</li>
                  <li>Php (Symfony)</li>
                  <li>Django, Flask</li>
                  <li>Pytest</li>
                </ul>

                <ul>
                  <li>Git &amp; Github &amp; Gitlab</li>
                  <li>MongoDB</li>
                  <li>MySql</li>
                  <li>Postgresql</li>
                  <li>Firebase</li>
                  <li>Heroku</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Helm Charts</li>
                  <li>Gitlab CI</li>
                  <li>Gitlab Actions</li>
                  <li>Prometheus</li>
                  <li>Grafana</li>
                  <li>Loki</li>
                  <li>NGINX</li>
                  <li>Terraform</li>
                  <li>Ansible</li>
                  <li>Virtualisation</li>
                  <li>Réseaux Informatiques</li>
                  <li>Pandas</li>
                  <li>Numpy</li>
                  <li>Scikit-Learn</li>
                  <li>Matplotlib</li>
                  <li>Data Analysis/Data Science</li>
                </ul>
              </div>
            </div>

            {/* <div className='social-links'>
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
