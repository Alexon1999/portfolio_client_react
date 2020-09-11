import React, { forwardRef } from 'react';

const baseUrl = 'https://my-portfolio-alexon.herokuapp.com/'; //+ http://localhost:5000

const Project = forwardRef(({ project, getProjectDetail }, ref) => {
  return (
    <div ref={ref} className='card' onClick={getProjectDetail(project._id)}>
      <div className='img-container'>
        <img src={baseUrl + project.imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <h2>{project.name}</h2>
        {/* <ReactMarkdown source={project.description} /> */}
      </div>
    </div>
  );
});

export default Project;