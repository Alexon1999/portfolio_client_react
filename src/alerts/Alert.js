import React, { forwardRef } from 'react';
import { removeFromAlert } from '../redux/actionCreator';

const Alert = forwardRef(({ id, dispatch, message, sended }, ref) => {
  const onClose = (id) => () => {
    dispatch(removeFromAlert(id));
  };

  return (
    <div ref={ref} className='alert'>
      <i
        className='fas fa-check'
        style={{ color: sended ? '#00d1b2' : 'red' }}
      />
      <p>
        <span>{message} </span>
      </p>

      <i className='fas fa-times close' onClick={onClose(id)}></i>
    </div>
  );
});

export default Alert;
