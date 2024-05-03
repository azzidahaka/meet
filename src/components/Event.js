const Event = ({ data }) => {
  return (
    <li>
      <span>{data.summary}</span>
      <span>{data.created}</span>
      <span>{data.location}</span>
      <button>show details</button>
    </li>
  );
};

export default Event;
