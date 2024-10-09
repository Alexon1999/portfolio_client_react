import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

const Footer = () => {
  const upBtn = useRef(null);
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  const copyPhoneNumber = () => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = "0033768595182";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    textArea.remove();

    const id = uuidv4();

    dispatch({
      type: "COPIED",
      payload: {
        id,
        sended: true,
        message: "copié dans votre presse-pappier",
      },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_TO_ALERT",
        payload: id,
      });
    }, 5000);
  };

  useEffect(() => {
    // const upBtn = document.querySelector('.upBtn');

    function throttle(fn, delay) {
      let inThrottle;
      return (e) => {
        if (!inThrottle) {
          fn(e);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), delay);
        }
      };
    }

    document.addEventListener(
      "wheel",
      throttle((e) => {
        // console.log(e.deltaY);
        if (window.scrollY >= 300) {
          if (e.deltaY < 0) {
            // upBtn.style.display = 'block';
            upBtn.current.classList.add("show");
          } else {
            upBtn.current.classList.remove("show");
          }
        } else {
          upBtn.current.classList.remove("show");
        }
      }, 800)
    );
    document.addEventListener(
      "touchmove",
      throttle((e) => {
        if (e.deltaY < 0) {
          // upBtn.style.display = 'block';
          upBtn.current.classList.add("show");
        } else {
          upBtn.current.classList.remove("show");
        }
      }, 800)
    );

    const ScrollUpBtn = (e) => {
      e.preventDefault();

      window.scroll({
        top: 0,
        behavior: "smooth",
      });

      upBtn.current.classList.remove("show");
    };

    upBtn.current.addEventListener("click", ScrollUpBtn);

    const up = upBtn.current;
    return () => {
      window.removeEventListener("touchmove", throttle);
      window.removeEventListener("wheel", throttle);
      up && up.removeEventListener("click", ScrollUpBtn);
    };
  }, []);

  const test = "ihi";

  return (
    <>
      <footer className='footer' id='footer'>
        <div className='footer_content'>
          <h1>Uthayakumar Alexon</h1>
        </div>

        <div className='social_media'>
          <a
            href="mailto:alexon1999@gmail.com?subject=Plus d'information"
            aria-label='envoie email'>
            <i className='fas fa-envelope'></i>
          </a>
          <a
            href='javascript:void(0);'
            target='_self'
            rel='noopener noreferrer'
            onClick={copyPhoneNumber}>
            <i className='fas fa-phone-alt'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/alexon-uthayakumar-9361221a2/'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/alexonjr'>
            <i className='fab fa-facebook'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/ualexon1999/?hl=fr'>
            <i className='fab fa-instagram'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Alexon1999'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </footer>

      <i ref={upBtn} className='upBtn fas fa-chevron-circle-up fa-4x'></i>
    </>
  );
};

export default Footer;
