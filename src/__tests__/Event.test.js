/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from '@testing-library/react';
import Event from '../components/Event';

describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event />);
  });

  test("An element for the event title", () => {
    expect(EventComponent.queryByText('.summary')).toBeInTheDocument();
  });

  test("An element for the event's start time", () => {
    expect(EventComponent.queryByText('.summary')).toBeInTheDocument();
  });

  test("An element for the event's location", () => {
    expect(EventComponent.queryByText('.summary')).toBeInTheDocument();
  });

  
});
