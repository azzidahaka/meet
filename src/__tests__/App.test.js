/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
import { render, within, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    AppDOM = render(<App />).container.firstChild;
  });

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('render NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });
});

describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    // const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await userEvent.type(CitySearchInput, 'Berlin');
    const berlinSuggestionItem = screen.getByText('Berlin, Germany');

    await userEvent.click(berlinSuggestionItem);

    const allRenderedEventItems = await screen.findAllByRole('listitem');
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter((event) => event.location === 'Berlin, Germany');

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain('Berlin, Germany');
    });
  });
});

describe('<NumberOfEvent /> integration', () => {
  test('number of events integration', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventDOM = AppDOM.querySelector('#number-of-events');
    const NOEInput = within(NumberOfEventDOM).queryByRole('textbox');

    await userEvent.type(NOEInput, '{backspace}{backspace}10');

    const allRenderedEventItems = await screen.findAllByRole('listitem');
    expect(allRenderedEventItems.length).toBe(10);
  });
});
