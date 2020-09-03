import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const upBtn = useRef(null);

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

    window.addEventListener(
      'wheel',
      throttle((e) => {
        // console.log(e.deltaY);
        if (window.scrollY >= 300) {
          if (e.deltaY < 0) {
            // upBtn.style.display = 'block';
            upBtn.current.classList.add('show');
          } else {
            upBtn.current.classList.remove('show');
          }
        } else {
          upBtn.current.classList.remove('show');
        }
      }, 800)
    );
    window.addEventListener(
      'touchmove',
      throttle((e) => {
        if (e.deltaY < 0) {
          // upBtn.style.display = 'block';
          upBtn.current.classList.add('show');
        } else {
          upBtn.current.classList.remove('show');
        }
      }, 800)
    );

    const ScrollUpBtn = (e) => {
      e.preventDefault();

      window.scroll({
        top: 0,
        behavior: 'smooth',
      });

      upBtn.current.classList.remove('show');
    };

    upBtn.current.addEventListener('click', ScrollUpBtn);

    const up = upBtn.current;
    return () => {
      window.removeEventListener('touchmove', throttle);
      window.removeEventListener('wheel', throttle);
      up && up.removeEventListener('click', ScrollUpBtn);
    };
  }, []);

  return (
    <>
      <footer className='footer' id='footer'>
        <div className='footer_content'>
          <h1>Uthayakumar Alexon</h1>
        </div>

        <div className='social_media'>
          <a href="mailto:alexon1999@gmail.com?subject=Plus d'information">
            <i className='fas fa-envelope'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://google.Com'>
            <i className='fas fa-phone-alt'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://google.Com'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://google.Com'>
            <i className='fab fa-facebook'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://google.Com'>
            <i className='fab fa-instagram'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://google.Com'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </footer>

      <i ref={upBtn} className='upBtn fas fa-chevron-circle-up fa-4x'></i>
    </>
  );
};

export default Footer;
