import React, { useEffect, useState, useMemo } from 'react';

import mongoDbSVG from './mongoDb.svg';
import mySqlSVG from './mySql.svg';

import axios from './axios/axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Collapse, Button, Badge } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';

const baseUrl = 'https://my-portfolio-alexon.herokuapp.com/'; //+ http://localhost:5000

const langagesObject = {
  html: { type: 'itag', src: 'fab fa-html5 fa-3x' },
  css: { type: 'itag', src: 'fab fa-css3-alt fa-3x' },
  js: { type: 'itag', src: 'fab fa-js fa-3x' },
};

const backEndObject = {
  NodeJs: {
    type: 'png',
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
  },
  mongoDb: { type: 'svg', src: mongoDbSVG },
  Express: {
    type: 'png',
    src: 'https://expressjs.com/images/express-facebook-share.png',
  },
  Firebase: {
    type: 'png',
    src:
      'https://www.gstatic.com/devrel-devsite/prod/v024eef4ea86c0379222e27415e1e58a21ab1695c99975204bbd5279577b49303/firebase/images/lockup.png?dcb_=0.7848920872950038',
  },
  mySql: { type: 'svg', src: mySqlSVG },
};

const getLesLangagesBackends = (data) => {
  let langages = [];
  let backends = [];
  const splitedLangArr = data?.langages.split(',');
  const splitedBackEndArr =
    data?.backend !== '' ? data?.backend.split(',') : null;

  if (splitedLangArr?.length > 0) {
    for (const l in langagesObject) {
      const { src, type } = langagesObject[l];
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
  const [langagesBackends, setLangagesBackends] = useState({
    langages: [],
    backends: [],
  });

  useEffect(() => {
    // let cancelToken1 = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/projects/${params.id}`
          // {
          //   cancelToken: cancelToken1.token,
          // }
        );

        setData(data);
        setLangagesBackends({
          ...langagesBackends,
          ...getLesLangagesBackends(data),
        });
      } catch (err) {
        // if (axios.isCancel(err)) return;
        console.log(err?.response?.data?.msg);
      }
    };

    fetchData();

    // return () => {
    //   cancelToken1 && cancelToken1.cancel();
    // };
  }, [params.id]);

  const handleCollapse = () => {
    setOpen((prev) => !prev);
  };

  const goToPage = (url) => () => {
    window.open(url, '_blank');
  };

  return (
    <div className='projectDetail'>
      {data && (
        <>
          <div className='projectDetail__header'>
            <h1 className='projectDetail__heading'>{data?.name} </h1>
            <div className='projectDetail__badges'>
              {data?.category && (
                <Badge variant='info'>
                  <i className='fas fa-code'></i> {data?.category}
                </Badge>
              )}
              {data?.react && (
                <Badge variant='primary'>
                  {' '}
                  <i className='fab fa-react'></i> react
                </Badge>
              )}
              {data?.finie ? (
                <Badge variant='success'>
                  <i className='fas fa-check'></i> terminé
                </Badge>
              ) : (
                <Badge variant='danger'>
                  <i className='fas fa-times'></i> terminé
                </Badge>
              )}
            </div>
          </div>
          <img
            className='projectDetail__Image'
            src={baseUrl + data?.imgUrl}
            alt={data?.name}
          />

          <div className='projectDetail__langages'>
            <h5 className='projectDetail__langagesHeading'>
              Les Langages de programmations et Back-end (côtés Serveur)
              utilisés :{' '}
            </h5>
            {langagesBackends.langages.length > 0 && (
              <div className='projectDetail__container'>
                <div className='projectDetail__langagesIcones'>
                  {langagesBackends.langages.map(({ src, name, type }) => {
                    // <img key={name} src={imgSrc} alt={name} />
                    if (type === 'itag') {
                      return <i key={name} className={src} alt={name} />;
                    } else {
                      return <img src={src} alt={name} key={name} />;
                    }
                  })}
                </div>
                <div className='projectDetail__BackendsIcones'>
                  {langagesBackends.backends.map(({ src, type, name }) => {
                    // <img key={name} src={imgSrc} alt={name} />
                    if (type === 'itag') {
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
              {!open ? 'Voir la Description' : 'Cacher la Description'}
            </Button>

            <IconButton onClick={goToPage(data?.gitRepoUrl)}>
              <i className='fab fa-github fa-1.8x'></i>
            </IconButton>
          </div>

          <Collapse in={open}>
            <div className='projectDetail__Description'>
              <ReactMarkdown source={data?.description} />
            </div>
          </Collapse>
        </>
      )}
    </div>
  );
};

export default Project;
