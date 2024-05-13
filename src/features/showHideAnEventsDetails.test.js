/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
  });
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;
    given('user has a list of events displayed', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    when('User cannot see additional information about events', () => {
      expect(within(EventListItems[0]).queryByText('show details')).toBeInTheDocument();
    });

    then('the user should see a button that says "show details"', () => {
      expect(within(EventListItems[0]).queryByText('show details')).not.toBeNull();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;
    let Event;
    given('user is viewing the list of events', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    when('user clicks the "show details " button', async () => {
      const showButton = EventListItems[0].querySelector('.details-btn');
      await userEvent.click(showButton);
    });

    then('the event details section becomes visible', () => {
      Event = within(EventListItems[0]).queryByText(allEvents[0].description.replace(/\n/g, ''));
      expect(Event).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;
    let Event;

    given('user can see details about an event', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
      const showButton = EventListItems[0].querySelector('.details-btn');
      await userEvent.click(showButton);
      Event = within(EventListItems[0]).queryByText(allEvents[0].description.replace(/\n/g, ''));
    });

    when('user clicks the "hide details " button', async () => {
      const hideButton = EventListItems[0].querySelector('.details-btn');
      await userEvent.click(hideButton);

    });

    then('the event details should be hidden again', () => {
      expect(Event).not.toBeInTheDocument();
      expect(within(EventListItems[0]).queryByText('hide details'));
    });
  });
});
