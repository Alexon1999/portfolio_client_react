import React, { useRef, useEffect, useState, useMemo } from "react";

import Svg from "./Svg";
import Project from "./Project";

import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import GithubCalendar from "github-calendar";
import FlipMove from "react-flip-move";
import useDatabase from "./hooks/useDatabase";

const Projects = () => {
  const heading = useRef(null);
  const githubCalendar = useRef(null);
  const history = useHistory();
  const [categoriesQuery, setCategoriesQuery] = useState("");
  const [orderBy, setOrderBy] = useState("updatedAt");
  const [order, setOrder] = useState("desc");
  const [projectsTransformed, setProjectsTransformed] = useState([]);

  const queryParams = useMemo(() => {
    const params = {};
    if (categoriesQuery) params.categories = categoriesQuery;
    if (orderBy) params.orderby = orderBy;
    if (order) params.order = order;
    return params;
  }, [categoriesQuery, orderBy, order]);

  const { data: categories } = useDatabase("/api/categories", {
    method: "GET",
  });
  const { data: projects } = useDatabase("/api/projects", {
    method: "GET",
    queryParams,
  });

  useEffect(() => {
    const scrollHead = () => {
      const windowHalfHeight = window.innerHeight / 2;

      if (windowHalfHeight > heading.current.getBoundingClientRect().top) {
        heading.current.classList.add("active");
      } else {
        heading.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", scrollHead);

    const githubText = async () => {
      // push calendar to the div with class of calendar
      // await GithubCalendar(".calendar", "Alexon1999", {
      //   responsive: true,
      // });
      GithubCalendar(githubCalendar.current, "Alexon1999", {
        responsive: true,
      });
    };

    githubText();

    return () => {
      window.removeEventListener("scroll", scrollHead);
    };
  }, []);

  useEffect(() => {
    if (projects) {
      setProjectsTransformed(
        projects.map((project) => ({
          ...project,
          categories_strings: project.categories.map(
            (category) => category.name
          ),
        }))
      );
    }
  }, [projects]);

  const handleClick = (type) => (e) => {
    e.preventDefault();

    const btns = document.querySelectorAll(".work_menu > .btn");
    btns.forEach((b) => {
      b.classList.remove("btn_primary");
    });

    if (!e.target.classList.contains("btn_primary")) {
      e.target.classList.add("btn_primary");
    }

    setCategoriesQuery(type);
  };

  const goToGithub = (e) => {
    if (
      e.target.classList.contains("calendar") ||
      e.target.parentElement.classList.contains("calendar") ||
      e.target.parentElement.parentElement.classList.contains("calendar")
    ) {
      // querySelector return html or null
      // const a = document.querySelector(
      //   "#projects > div > div.calendar > div.position-relative > div > div.contrib-footer.clearfix.mt-1.mx-3.px-3.pb-1 > div.float-left.text-gray > a"
      // );
      // window.location.href = a.href;

      // console.log(a);

      // + New tab
      // window.open(a?.href || "https://github.com/Alexon1999", "_blank");
      window.open("https://github.com/Alexon1999", "_blank");
    }
  };

  const getProjectDetail = (id) => () => {
    history.push(`/project/${id}`);
  };

  return (
    <section id='projects' className='work_section'>
      <div className='work_section-container'>
        <motion.h1 ref={heading} className='heading'>
          {/* Mes Travails */}
          Mes Projets
        </motion.h1>

        <div className='work_heading'>
          <Svg />
        </div>

        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          onClick={goToGithub}
          className='calendar'
          ref={githubCalendar}></motion.div>

        <div className='work_menu'>
          <motion.a
            onClick={handleClick("")}
            className='btn work_btn btn_primary'>
            Tous
          </motion.a>

          {categories?.map((category) => (
            <motion.a
              key={category._id}
              onClick={handleClick(category._id)}
              className='btn work_btn'>
              {category?.name}
            </motion.a>
          ))}
        </div>

        {/* <div className='my_works'> */}
        <FlipMove className='my_works'>
          {projectsTransformed?.map((project) => (
            <Project
              key={project._id}
              project={project}
              getProjectDetail={getProjectDetail}
            />
          ))}
        </FlipMove>

        {/* <div className='card'>
            <div className='img-container'>
              <img src={'./imgs/rsz_1finish_task2.png'} />
            </div>
            <div className='card-content'>
              <h1>Html / Css</h1>
              <p>Client Wensite Design</p>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Projects;
