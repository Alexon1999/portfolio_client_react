import React, { useEffect, useState } from "react";

import mongoDbSVG from "./mongoDb.svg";
import mySqlSVG from "./mySql.svg";

import axios from "./axios/axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Collapse, Button, Badge } from "react-bootstrap";
import { IconButton } from "@mui/material";
import useApi from "./hooks/useApi";

const langagesObject = {
  html: { type: "itag", src: "fab fa-html5 fa-3x" },
  css: { type: "itag", src: "fab fa-css3-alt fa-3x" },
  js: { type: "itag", src: "fab fa-js fa-3x" },
  php: { type: "itag", src: "fab fa-php fa-3x" },
  Python: { type: "itag", src: "fab fa-python fa-3x" },
};

const backEndObject = {
  NodeJs: {
    type: "png",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  mongoDb: { type: "svg", src: mongoDbSVG },
  Express: {
    type: "png",
    src: "https://expressjs.com/images/express-facebook-share.png",
  },
  Firebase: {
    type: "png",
    src: "https://www.gstatic.com/devrel-devsite/prod/v0a713fec70a4b4c54311265d5142e962747a0e45a24063467564a2765c008ac7/firebase/images/lockup.png",
  },
  mySql: { type: "svg", src: mySqlSVG },
  Django: {
    type: "png",
    src: "https://www.ambient-it.net/wp-content/uploads/2018/10/django175.png",
  },
};

const getLesLangagesBackends = (data) => {
  let langages = [];
  let backends = [];

  const splitedLangArr = data?.langages.split(",");
  const splitedBackEndArr =
    data?.backend !== "" ? data?.backend.split(",") : null;

  if (splitedLangArr?.length > 0) {
    for (const l in langagesObject) {
      const { src, type } = langagesObject[l];
      // eslint-disable-next-line no-unused-expressions
      splitedLangArr?.forEach((langage) => {
        if (l === langage) {
          langages.push({ src, name: l, type });
        }
      });
    }
  }
  if (splitedBackEndArr) {
    for (const b in backEndObject) {
      const { src, type } = backEndObject[b];
      // eslint-disable-next-line no-unused-expressions
      splitedBackEndArr?.forEach((backend) => {
        if (b === backend) {
          backends.push({ src, name: b, type });
        }
      });
    }
  }

  return { langages, backends };
};

const Project = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(null);
  const [showWebPage, setShowWebPage] = useState(true);
  const [langagesBackends, setLangagesBackends] = useState({
    langages: [],
    backends: [],
  });
  const noWebpage = [
    "Ebook",
    "Zoom_clone",
    "Top's_10 App",
    "Youtube Clone",
    "Projet GSB",
  ];

  const { data: projectDetails } = useApi("/api/projects/:id", {
    method: "GET",
    urlParams: { id: params.id },
  });

  console.log(projectDetails);

  useEffect(() => {
    // let cancelToken1 = axios.CancelToken.source();
    if (projectDetails) {
      const categories_strings = projectDetails.categories
        .map((category) => category.name)
        .join(" ");

      setData({
        ...projectDetails,
        categories_strings,
      });
      setLangagesBackends({
        ...langagesBackends,
        ...getLesLangagesBackends(projectDetails),
      });
    }
  }, [projectDetails]);

  useEffect(() => {
    if (noWebpage.includes(data?.name)) {
      setShowWebPage(false);
    }
  }, [data]);

  const handleCollapse = () => {
    setOpen((prev) => !prev);
  };

  const goToPage = (url) => () => {
    window.open(url, "_blank");
  };

  const statut_badge = (statut) => {
    if (statut === "finish") {
      return (
        <Badge variant='success'>
          <i className='fas fa-check'></i> Finished
        </Badge>
      );
    } else if (statut == "in_progress") {
      return (
        <Badge variant='success'>
          <i className='fas fa-times'></i> In Progress
        </Badge>
      );
    } else if (statut == "to_do") {
      return (
        <Badge variant='success'>
          <i className='fas fa-times'></i> To Do
        </Badge>
      );
    }
  };

  return (
    <div className='projectDetail'>
      {data && (
        <>
          <div className='projectDetail__header'>
            <h1 className='projectDetail__heading'>{data?.name} </h1>
            <div className='projectDetail__badges'>
              {data?.categories_strings && (
                <Badge variant='info'>
                  <i className='fas fa-code'></i> {data?.categories_strings}
                </Badge>
              )}

              {statut_badge(data?.statut)}
            </div>
          </div>

          {/* <img
            className='projectDetail__Image'
            src={baseUrl + data?.imgUrl}
            alt={data?.name}
          /> */}

          {/* // + interaction d'une autre page dans le notre */}
          <div
            className='page__container'
            style={{
              height: showWebPage && "73vh",
              marginBottom: showWebPage && "1rem",
            }}>
            {showWebPage ? (
              <iframe
                className='webpage__iframe'
                src={data?.link}
                width='100%'
                height='100%'
                sandbox>
                {/* <p>
              <a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/'>
                Un lien à utiliser dans les cas où les navigateurs ne supportent
                pas les <i>iframes</i>.
              </a>
            </p> */}
                <img
                  className='projectDetail__Image'
                  src={data?.imgUrl}
                  alt={data?.name}
                />
              </iframe>
            ) : (
              // <img
              //   className='projectDetail__Image'
              //   src={baseUrl + data?.imgUrl}
              //   alt={data?.name}
              // />
              <img
                className='projectDetail__Image'
                src={data?.imgUrl}
                alt={data?.name}
              />
            )}
          </div>

          <div className='projectDetail__langages'>
            <h5 className='projectDetail__langagesHeading'>
              Les Langages de programmations et Back-end (côtés Serveur)
              utilisés :{" "}
            </h5>
            {langagesBackends.langages.length > 0 && (
              <div className='projectDetail__container'>
                <div className='projectDetail__langagesIcones'>
                  {langagesBackends.langages.map(({ src, name, type }) => {
                    // <img key={name} src={imgSrc} alt={name} />
                    if (type === "itag") {
                      return <i key={name} className={src} alt={name} />;
                    } else {
                      return <img src={src} alt={name} key={name} />;
                    }
                  })}
                </div>
                <div className='projectDetail__BackendsIcones'>
                  {langagesBackends.backends.map(({ src, type, name }) => {
                    // <img key={name} src={imgSrc} alt={name} />
                    if (type === "itag") {
                      return <i key={name} className={src} alt={name} />;
                    } else {
                      return <img src={src} alt={name} key={name} />;
                    }
                  })}
                </div>
              </div>
            )}
          </div>

          <div className='projectDetail__buttons'>
            <Button
              style={{ borderRadius: 5 }}
              onClick={goToPage(data?.link)}
              variant='outline-primary'>
              Voir la page
            </Button>

            <Button
              style={{ borderRadius: 5 }}
              className='collapseBtn'
              onClick={handleCollapse}
              variant='primary'>
              {!open ? "Voir la Description" : "Cacher la Description"}
            </Button>

            <IconButton onClick={goToPage(data?.gitRepoUrl)}>
              <i className='fab fa-github fa-1.8x'></i>
            </IconButton>
          </div>

          <Collapse in={open}>
            <div className='projectDetail__Description'>
              <ReactMarkdown>{data?.description}</ReactMarkdown>
            </div>
          </Collapse>
        </>
      )}
    </div>
  );
};

export default Project;
