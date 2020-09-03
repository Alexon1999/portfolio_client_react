import React, { useEffect, useState } from 'react';

import axios from './axios/axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Collapse, Button, Badge } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';

const baseUrl = 'https://my-portfolio-alexon.herokuapp.com/'; //+ http://localhost:5000

const Project = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(null);

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
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.log(err.response.data.msg);
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
    <div className='projectDetail' style={{ padding: '3rem' }}>
      {data && (
        <>
          <div className='projectDetail__header'>
            <h1 className='projectDetail__heading'>{data?.name} </h1>
            <div className='projectDetail__badges'>
              {data?.react && <Badge variant='primary'>react</Badge>}
              {data?.finie ? (
                <Badge variant='success'>
                  <i class='fas fa-check'></i> terminé
                </Badge>
              ) : (
                <Badge variant='danger'>
                  <i class='fas fa-times'></i> terminé
                </Badge>
              )}
            </div>
          </div>
          <img
            className='projectDetail__Image'
            src={baseUrl + data?.imgUrl}
            alt={data?.name}
          />

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
              <i class='fab fa-github fa-1.8x'></i>
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
