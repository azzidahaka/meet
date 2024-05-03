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
    EventComponent = render(<Event data={allEvents[0]} />);
  });

  test('An element for the event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test("An element for the event's start time", () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test("renders event location",() => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)",() => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test("by, default, event's details section should be hidden",() => {
      const showButton = EventComponent.queryByRole('button')
      userEvent.click(showButton);
      expect(showButton.queryByText('hide details')).toBeInTheDocument();

  });
});
