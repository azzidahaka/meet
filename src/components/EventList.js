import Event from './Event';

const EventList = ({ events }) => {
  return (
    <ul id='event-list'>
      {events
        ? events.map((eventData) => (
            <Event
              key={eventData.id}
              data={eventData}
            />
          ))
        : null}
    </ul>
  );
};

export default EventList;
