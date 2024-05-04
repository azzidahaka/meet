import EventList from './components/EventList';
import CitySearch from './components/CitySearch';

import './App.css';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  return (
    <div className='App'>
      <NumberOfEvents />
      <CitySearch />
      <EventList />
    </div>
  );
};

export default App;
