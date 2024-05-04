import React, { useState } from 'react';

const Event = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return (
    <li>
      <span>{data.summary}</span>
      <span>{data.created}</span>
      <span>{data.location}</span>
      {visible && <div>{data.description}</div>}
      <button onClick={() => setVisible(!visible)}>{visible ? 'hide details' : 'show details'}</button>
    </li>
  );
};

export default Event;
