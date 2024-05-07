import React, { useState } from 'react';

const Event = ({ data }) => {
  const [visible, setVisible] = useState(false);
  // console.log('data', data);
  return (
    <li className='event'>
      <span>{data.summary}</span>
      <span>{data.created}</span>
      <span>{data.location}</span>
      {visible && <div>{data.description}</div>}
      <button
        className='details-btn'
        onClick={() => setVisible(!visible)}>
        {visible ? 'hide details' : 'show details'}
      </button>
    </li>
  );
};

export default Event;
