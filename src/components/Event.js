import React, { useState } from 'react';

const Event = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return (
    <li className='event'>
      <h2>{data && data.summary}</h2>
      <p>{data && data.location}</p>
      <p>{data && new Date(data.created).toUTCString()}</p>
      {visible && <div className='details'>{data.description}</div>}
      <button
        className='details-btn'
        onClick={() => setVisible(!visible)}>
        {visible ? 'hide details' : 'show details'}
      </button>
    </li>
  );
};

export default Event;
