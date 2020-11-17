import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import loader1 from './imgs//Spinner-1s-200px.gif';
import loader2 from './imgs/chargement.gif';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = () => {
      // fin du loading
      setLoading(false);
    };

    window.addEventListener('load', loader);

    return () => {
      window.removeEventListener('load', loader);
    };
  }, []);

  if (!loading) {
    const navbar = document.getElementById('navbar');
    const loader = document.getElementById('loader');
    const app = document.querySelector('.App');

    navbar?.classList.add('show');
    app?.classList.add('show');
    loader?.classList.add('finished');
  }

  return ReactDom.createPortal(
    <div className='loader' id='loader'>
      <div>
        <img src={loader1} className='img1' alt='' />
        <img src={loader2} alt='' />
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Loader;
