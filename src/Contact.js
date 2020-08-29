import React from 'react';

import Video from './imgs//contact_video.mp4';

const Contact = () => {
  return (
    <section className='form_submission'>
      <div className='container'>
        <form action='' method='post' className='form'>
          <div className='form-control'>
            <label htmlFor='name'>Your name : </label>
            <input type='text' />
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Your Email : </label>
            <input type='text' />
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Message </label>
            <textarea></textarea>
          </div>

          <button className='btn btn_block'>Envoyer</button>
        </form>
        <div className='video_container'>
          <video src={Video} autoPlay loop className='video' id='video'></video>
        </div>
      </div>
    </section>
  );
};

export default Contact;
