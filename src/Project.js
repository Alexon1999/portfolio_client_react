import React, { forwardRef } from "react";

const Project = forwardRef(({ project, getProjectDetail }, ref) => {
  return (
    <div ref={ref} className='card' onClick={getProjectDetail(project._id)}>
      <div className='img-container'>
        {/* // * https://my-portfolio-alexon.herokuapp.com/uploads/amazon.png` */}
        {/* ex : project.imgUrl = "/uploads/amazon.png" */}
        {/* <img src={baseUrl + project.imgUrl} alt='' /> */}
        <img src={project.imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <h2>{project.name}</h2>
        {/* <ReactMarkdown source={project.description} /> */}
      </div>
    </div>
  );
});

export default Project;
