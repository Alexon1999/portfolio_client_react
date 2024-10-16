import React, { useEffect, useRef } from "react";

import logo from "./imgs/logo.png";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const nav = useRef(null);
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    function navBar() {
      const windowHeight = window.innerHeight;
      // console.log(document.documentElement.clientHeight); // pareil

      const { scrollTop } = document.documentElement;

      if (scrollTop >= windowHeight / 4) {
        nav.current.style.opacity = 0.97;
      } else {
        nav.current.style.opacity = 1;
      }
    }

    window.addEventListener("scroll", navBar);
    return () => {
      window.removeEventListener("scroll", navBar);
    };
  }, []);

  const handleHlick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const href = e.target.hash; // '#projects'
    const offsetTop = document.querySelector(href).offsetTop;

    // console.log({ href, offsetTop });

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav ref={nav} id='navbar'>
      <div className='container'>
        <div className='img-container'>
          <Link to='/' aria-label="Retour à la page d'accueil">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              src={logo}
              alt=''
            />
          </Link>
        </div>

        <nav>
          {location.pathname === "/" && (
            <a
              href='#projects'
              onClick={handleHlick}
              // className='btn_work'
              className='btn btn_third'>
              {/* Travail */}
              {t("nav.projects")}
            </a>
          )}

          <Link
            to='/about'
            className={`btn btn_third  ${
              location.pathname === "/about" ? "btn_primary" : ""
            }`}>
            {t("nav.aboutMe")}
          </Link>

          <Link
            to='/contact'
            id='contact1'
            className={`btn btn_third ${
              location.pathname === "/contact" ? "btn_primary" : ""
            }`}>
            {t("nav.contact")}
          </Link>
        </nav>

        <LanguageSwitcher />

        <NavMobile />
        {/* <i className='fas fa-bars fa-2x'></i> */}
      </div>
    </nav>
  );
};

export default Navbar;
