import React from 'react';
import Alert from './Alert';

import FlipMove from 'react-flip-move';

import './Alerts.css';

import { useDispatch, useSelector } from 'react-redux';

const Alerts = () => {
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);

  return (
    <div className='alerts'>
      <FlipMove>
        {alerts.map((alert) => (
          <Alert {...alert} dispatch={dispatch} key={alert.id} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Alerts;
