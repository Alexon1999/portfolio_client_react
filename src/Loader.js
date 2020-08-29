import React from 'react';

import loader1 from './imgs//Spinner-1s-200px.gif';
import loader2 from './imgs/chargement.gif';

const Loader = () => {
  return (
    <div className='loader' id='loader'>
      <div>
        <img src={loader1} className='img1' alt='' />
        <img src={loader2} alt='' />
      </div>
    </div>
  );
};

export default Loader;
