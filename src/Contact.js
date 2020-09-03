import React, { useState } from 'react';

import Video from './imgs//contact_video.mp4';
import axios from './axios/axios';

const baseUrl = 'https://my-portfolio-alexon.herokuapp.com/'; //+ http://localhost:5000

import {
  Button,
  // FormControl,
  // InputLabel,
  // Input,
  // FormHelperText,
} from '@material-ui/core';

const Contact = () => {
  const [contactFields, setContactFields] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactFields({ ...contactFields, [e.target.name]: e.target.value });
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    const opt = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await axios.post(baseUrl + 'post-email', contactFields, opt);

    setContactFields({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className='form_submission'>
      <div className='container'>
        <form method='post' onSubmit={handlSubmit} className='form'>
          <div class='field'>
            <p class='control has-icons-left has-icons-right'>
              <input
                class='input'
                name='name'
                type='text'
                value={contactFields.name}
                onChange={handleChange}
                placeholder='Votre Nom'
              />
              <span class='icon is-small is-left'>
                <i class='fas fa-user'></i>
              </span>
              <span class='icon is-small is-right'>
                <i class='fas fa-check'></i>
              </span>
            </p>
          </div>
          <div class='field'>
            <p class='control has-icons-left has-icons-right'>
              <input
                class='input'
                type='email'
                name='email'
                value={contactFields.email}
                onChange={handleChange}
                placeholder='Email'
              />
              <span class='icon is-small is-left'>
                <i class='fas fa-envelope'></i>
              </span>
              <span class='icon is-small is-right'>
                <i class='fas fa-check'></i>
              </span>
            </p>
          </div>

          <div class='field'>
            <div class='control'>
              <textarea
                name='message'
                value={contactFields.message}
                onChange={handleChange}
                class='textarea is-info'
                placeholder='Message'></textarea>
            </div>
          </div>

          {/* <FormControl>
            <InputLabel htmlFor='my-input'>Email address</InputLabel>
            <Input id='my-input' aria-describedby='my-helper-text' />
            <FormHelperText id='my-helper-text'>
              We'll never share your email.
            </FormHelperText>
          </FormControl> */}

          <Button
            type='submit'
            classNAme='btn btnblock'
            variant='contained'
            color='secondary'>
            Envoyer
          </Button>
        </form>
        <div className='video_container'>
          <video src={Video} autoPlay loop className='video' id='video'></video>
        </div>
      </div>
    </section>
  );
};

export default Contact;
