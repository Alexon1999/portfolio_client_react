import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Video from "./imgs//contact_video.mp4";
import axios from "./axios/axios";

import isValideForm from "./functions/validateForm";
import { addToAlert } from "./redux/actionCreator";
import { motion, AnimatePresence } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  // const [contactFields, setContactFields] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  const contactForm = useSelector((state) => state.contactForm);
  const { name, email, message } = contactForm;

  const dispatch = useDispatch();

  const [isValide, setIsValide] = useState({
    name: name.valide,
    email: email.valide,
    message: message.valide,
  });
  const stockValide = useRef(isValide);

  const [valideForm, setValideForm] = useState(false);

  const handleChange = (e) => {
    isValideForm(
      e.target.name,
      e.target.value,
      setIsValide,
      isValide,
      stockValide
    );

    // setContactFields({ ...contactFields, [e.target.name]: e.target.value });
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  useEffect(() => {
    setIsValide({
      email: email.valide,
      name: name.valide,
      message: message.valide,
    });

    stockValide.current = isValide;

    validateForm(isValide);
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: "saveValide",
        payload: {
          email: { valide: stockValide.current.email },
          name: { valide: stockValide.current.name },
          message: { valide: stockValide.current.message },
        },
      });
    };
  }, []);

  const validateForm = (form) => {
    const filter = Object.values(form).filter((l) => !!l);
    filter.length === Object.values(form).length
      ? setValideForm(true)
      : setValideForm(false);
  };

  useEffect(() => {
    validateForm(isValide);
  }, [isValide]);

  const handlSubmit = async (e) => {
    e.preventDefault();
    const opt = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const AlertId = uuidv4();

    try {
      const { data } = await axios.post(
        "/post-email",
        {
          email: email.value,
          name: name.value,
          message: message.value,
        },
        opt
      );

      dispatch({
        type: "submited",
      });

      dispatch(addToAlert(data, AlertId));

      setIsValide({
        name: false,
        email: false,
        message: false,
      });

      stockValide.current = {
        name: false,
        email: false,
        message: false,
      };
    } catch (err) {
      dispatch(addToAlert(err.response.data));
    }

    setTimeout(() => {
      dispatch({
        type: "REMOVE_TO_ALERT",
        payload: AlertId,
      });
    }, 5000);

    // setContactFields({
    //   name: '',
    //   email: '',
    //   message: '',
    // });
  };

  return (
    <section className='form_submission'>
      <div className='container'>
        <form method='post' onSubmit={handlSubmit} className='form'>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                name='name'
                type='text'
                required
                // value={contactFields.name}
                value={name.value}
                onChange={handleChange}
                placeholder='Votre Nom'
              />
              <span className='icon is-small is-left'>
                <i
                  className='fas fa-user'
                  style={{
                    color: isValide.name ? "#00d1b2" : "red",
                  }}></i>
              </span>
              <span className='icon is-small is-right'>
                <i
                  className='fas fa-check'
                  style={{
                    color: isValide.name ? "#00d1b2" : "red",
                  }}></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='email'
                name='email'
                required
                // value={contactFields.email}
                value={email.value}
                onChange={handleChange}
                placeholder='Email'
              />
              <span className='icon is-small is-left'>
                <i
                  className='fas fa-envelope'
                  style={{
                    color: isValide.email ? "#00d1b2" : "red",
                  }}></i>
              </span>
              <span className='icon is-small is-right'>
                <i
                  className='fas fa-check'
                  style={{
                    color: isValide.email ? "#00d1b2" : "red",
                  }}></i>
              </span>
            </p>
          </div>

          <div className='field'>
            <div className='control'>
              <textarea
                name='message'
                style={{
                  borderColor: isValide.message ? "#00d1b2" : "red",
                }}
                required
                // value={contactFields.message}
                value={message.value}
                onChange={handleChange}
                className='textarea is-info'
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

          <AnimatePresence>
            {valideForm && (
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                exit={{ y: 50, opacity: 0, ease: "easeIn" }}
                disabled={!valideForm}
                type='submit'
                style={{
                  borderRadius: 5,
                  display: "block",
                  margin: "auto",
                  background: "#00d1b2",
                }}
                className='btn btn_primary'>
                Envoyer
              </motion.button>
            )}
          </AnimatePresence>
        </form>
        <div className='video_container'>
          <video src={Video} autoPlay loop className='video' id='video'></video>
        </div>
      </div>
    </section>
  );
};

export default Contact;
