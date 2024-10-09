import React, { useRef, useEffect, useState, useMemo } from "react";

import Svg from "./Svg";
import Project from "./Project";

import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import GithubCalendar from "github-calendar";
import FlipMove from "react-flip-move";
import useApi from "./hooks/useApi";
import { Spinner } from "react-bootstrap";

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

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useApi("/api/categories", {
    method: "GET",
  });
  const {
    data: projects,
    loading: projectsLoading,
    error: projectsError,
  } = useApi("/api/projects", {
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

    const showGithubCalendar = async () => {
      // push calendar to the div with class of calendar
      // await GithubCalendar(".calendar", "Alexon1999", {
      //   responsive: true,
      // });
      GithubCalendar(githubCalendar.current, "Alexon1999", {
        responsive: true,
        tooltips: true,
      });
    };

    showGithubCalendar();

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
      b.classList.remove("btn_primary", "active");
    });

    if (!e.target.classList.contains("btn_primary", "active")) {
      e.target.classList.add("btn_primary", "active");
    }

    setCategoriesQuery(type);
  };

  const goToGithub = (e) => {
    window.open("https://github.com/Alexon1999", "_blank");
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

        {/* Display loader, error, or content for categories */}
        {categoriesLoading && (
          <Spinner
            animation='border'
            variant='primary'
            style={{ margin: "15px" }}
          />
        )}
        {categoriesError && (
          <div>Error loading categories: {categoriesError}</div>
        )}
        {!categoriesLoading && !categoriesError && (
          <div className='work_menu'>
            <motion.button
              onClick={handleClick("")}
              className='btn work_btn btn_primary'>
              Tous
            </motion.button>
            {categories?.map((category) => (
              <motion.button
                key={category._id}
                onClick={handleClick(category._id)}
                className='btn work_btn'>
                {category?.name}
              </motion.button>
            ))}
          </div>
        )}

        {/* Display loader, error, or content for projects */}
        {projectsLoading && (
          <Spinner
            animation='border'
            variant='primary'
            style={{ marginTop: "15px" }}
          />
        )}
        {projectsError && <div>Error loading projects: {projectsError}</div>}
        {!projectsLoading && !projectsError && (
          <FlipMove className='my_works'>
            {projectsTransformed?.map((project) => (
              <Project
                key={project._id}
                project={project}
                getProjectDetail={getProjectDetail}
              />
            ))}
          </FlipMove>
        )}

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
