import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import "./AboutMe.css";

import MyImage from "./images/Alexon.PNG";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useLocalStorage("light");

  const { t } = useTranslation();

  const moreAboutMeWhatIDoAnswer = t("aboutMe.more_about_me.what_i_do_answer", {
    returnObjects: true,
  });

  const handleChangeTheme = (mode) => () => {
    console.log("clicked");
    setTheme(mode);
  };

  return (
    <div className='about-me'>
      <section className='s1'>
        <div className='main-container'>
          <div className='greeting-wrapper'>
            <h1 className='heading  heading_1'>{t("aboutMe.title")}</h1>
          </div>

          <div className='intro-wrapper'>
            <div className='nav-wrapper'>
              <a
                className='link_a'
                aria-label="Retour à la page d'accueil"
                onClick={() => navigate("/")}>
                <div className='dots-wrapper'>
                  <div id='dot-1' className='browser-dot'></div>
                  <div id='dot-2' className='browser-dot'></div>
                  <div id='dot-3' className='browser-dot'></div>
                </div>
              </a>

              <ul id='navigation'>
                <li>
                  <a className='link_a' onClick={() => navigate("/contact")}>
                    {t("aboutMe.contact_link_text")}
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
                {t("aboutMe.customize_theme.title")}
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
                *{t("aboutMe.customize_theme.description")}
              </p>
            </div>

            <div className='right-column'>
              <div id='preview-shadow'>
                <div id='preview'>
                  <div id='corner-tl' className='corner'></div>
                  <div id='corner-tr' className='corner'></div>
                  <h3 className='heading  heading_3'>
                    {t("aboutMe.what_i_do.title")}
                  </h3>
                  <p>{t("aboutMe.what_i_do.answer")}</p>
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
              <h4 className='heading  heading_4'>
                {t("aboutMe.more_about_me.title")}
              </h4>

              <p>{t("aboutMe.more_about_me.description")}</p>

              <p>
                🔍 {t("aboutMe.more_about_me.what_i_do")} :
                <ul>
                  {moreAboutMeWhatIDoAnswer.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </p>

              <hr />

              <h4 className='heading heading_4'>{t("aboutMe.myGoal.title")}</h4>

              <p>{t("aboutMe.myGoal.description_1")}</p>
              <p>
                {t("aboutMe.myGoal.description_2")}
                <a
                  className='link_a'
                  style={{ marginLeft: "1rem" }}
                  target='_blank'
                  href='AlexonUthayakumar.pdf'>
                  {t("aboutMe.myGoal.view_my_resume_text")}
                </a>{" "}
                <span>| </span>
                <a
                  href='https://github.com/Alexon1999'
                  target='_blank'
                  aria-label='github'>
                  {t("aboutMe.myGoal.view_my_github_text")}
                </a>
              </p>

              <hr />

              <h4 className='heading heading_4'>
                {t("aboutMe.mySkills.title")}
              </h4>

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
                  <li>Github Actions</li>
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
