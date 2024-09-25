import React, { useEffect, useState } from "react";

import mobile from "./imgs/mobile.png";

import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const activities = ["Développeur Full Stack", "DevOps"];

const Home = () => {
  const history = useHistory();
  const [activityIndex, setActivityIndex] = useState(0);
  const [headingAnimationComplete, setHeadingAnimationComplete] =
    useState(false);

  const handleHlick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const href = e.target.hash; // '#projects'
    const offsetTop = document.querySelector(href).offsetTop;

    console.log({ href, offsetTop });

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prevIndex) =>
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [headingAnimationComplete]);

  return (
    <section className='home_section'>
      <div className='section_content'>
        <motion.div
          initial={{ opacity: 0, y: "-150px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          onAnimationComplete={() => setHeadingAnimationComplete(true)}
          className='heading'>
          <p className='heading__greeting'>Bonjour !</p>
          <p className='heading__presentation'>
            Je suis Alexon,{" "}
            <AnimatePresence exitBeforeEnter>
              <motion.span
                className='heading__presentation__activity'
                key={activityIndex}
                initial={{ opacity: 0, y: "-20px" }}
                animate={{ opacity: 1, y: "0px" }}
                exit={{ opacity: 0, y: "20px" }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}>
                {activities[activityIndex]}
              </motion.span>
            </AnimatePresence>
          </p>
          <h1 className='heading__text'>
            Je vous accompagne tout au long du cycle de vie de vos systèmes
            d'information, en vous offrant une expertise complète et
            personnalisée
          </h1>
        </motion.div>

        <div className='navigation'>
          <motion.a
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeIn",
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
              history.push("/contact");
            }}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeIn",
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

        <div className='mouse-text'>
          <span className='mouse-text-content'>scroll down</span>
        </div>
      </div>

      <div className='mobile_container'>
        <img src={mobile} className='mobile_img' alt='' />
      </div>
    </section>
  );
};

export default Home;
