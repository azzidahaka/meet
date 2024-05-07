/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';
import { useState } from 'react';

describe('<NumberOfEvent /> component', () => {
  let NumberOfEventComponent;
  let mockSetCurrentNOE = jest.fn();
  beforeEach(() => {
    NumberOfEventComponent = render(
      <NumberOfEvents
        currentNOE={32}
        setCurrentNOE={mockSetCurrentNOE}
      />
    );
  });
  test('render text input', () => {
    const numberTextBox = NumberOfEventComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
  });

  test('default value is 32', () => {
    const numberTextBox = NumberOfEventComponent.queryByRole('textbox');
    expect(numberTextBox).toHaveValue('32');
  });

  test('number of event input changes on userevent', async () => {
    const numberTextBox = NumberOfEventComponent.queryByRole('textbox');
    fireEvent.change(numberTextBox, { target: { value: '22' } });// used fire event since user event is unable to simulate user deleting and adding 22
    // userEvent.clear(numberTextBox);
    expect(mockSetCurrentNOE).toHaveBeenCalledWith('22');
    // await userEvent.type(numberTextBox, '{backspace}{backspace}10');
    // expect(numberTextBox.value).toBe('10');
  });
});
