import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useCallback, useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState(['London, UK', 'Berlin, Germany']);
  const [currentCity, setCurrentCity] = useState('See all cities');

  const fetchData = useCallback(async () => {
    const allEvents = await getEvents();

    const filteredEvents =
      currentCity === 'See all cities'
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);

    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }, [setAllLocations, setEvents, currentCity, currentNOE]);

  useEffect(() => {
    fetchData();
  }, [currentCity, fetchData, allLocations]);

  return (
    <div className='App'>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
      />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
};

export default App;
