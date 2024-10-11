import React, { useEffect, useState } from "react";

import mobile from "./imgs/mobile.png";

import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const [activityIndex, setActivityIndex] = useState(0);
  const [headingAnimationComplete, setHeadingAnimationComplete] =
    useState(false);
  const { t } = useTranslation();
  const activities = t("home.activities", { returnObjects: true });

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
          <p className='heading__greeting'>{t("home.hello")} !</p>
          <p className='heading__presentation'>
            {t("home.introduction")},{" "}
            <AnimatePresence mode='wait'>
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
          <h1 className='heading__text'>{t("home.description")}</h1>
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
            {t("home.project_btn_text")}
          </motion.a>

          <motion.a
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
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
            {t("home.contact_btn_text")}
          </motion.a>
        </div>
      </div>

      <div className='mouse'>
        <div className='mouse-icon'>
          <span className='mouse-wheel'></span>
        </div>

        <div className='mouse-text'>
          <span className='mouse-text-content'>
            {t("home.scroll_down_btn_text")}
          </span>
        </div>
      </div>

      <div className='mobile_container'>
        <img src={mobile} className='mobile_img' alt='' />
      </div>
    </section>
  );
};

export default Home;
