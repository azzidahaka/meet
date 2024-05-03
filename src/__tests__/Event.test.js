/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event />);
  });

  test("An element for the event title", () => {
    expect(EventComponent.queryByText('.summary')).toBeInTheDocument();
  });

  test("An element for the event's start time", () => {
    expect(EventComponent.queryByText('.created')).toBeInTheDocument();
  });

  test("An element for the event's location", () => {
    expect(EventComponent.queryByText('.location')).toBeInTheDocument();
  });

  test("renders event location",() => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test("show/hides details button",() => {
    
  });
});
