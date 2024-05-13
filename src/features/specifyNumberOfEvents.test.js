/* eslint-disable testing-library/no-node-access */
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, within, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
  });

  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    let AppComponent;
    given("user is on the app's home page", () => {
      AppComponent = render(<App />);
    });

    when("user hasn't specified the number of events", () => {
      // No action needed
    });

    then('user should see 32 events listed', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed.', ({ given, when, then }) => {
    let AppComponent;
    given("user is on the app's home page", () => {
      AppComponent = render(<App />);
    });

    when('user types in the number of events to display', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const NumberOfEventDOM = AppDOM.querySelector('#number-of-events');
      const NOEInput = within(NumberOfEventDOM).queryByRole('textbox');
      await userEvent.type(NOEInput, '{backspace}{backspace}10');
      //   fireEvent.change(NumberOfEventsComponent('number-of-events'), { target: { value: '10' } });
    });

    then('user should see only the specified number of events listed', async () => {
      const allRenderedEventItems = await screen.findAllByRole('listitem');
      expect(allRenderedEventItems.length).toBe(10);
    });
  });
});
