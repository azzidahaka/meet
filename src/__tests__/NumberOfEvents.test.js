/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvent /> component', () => {
  let NumberOfEventComponent;
  beforeEach(() => {
    NumberOfEventComponent = render(<NumberOfEvents />);
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
    await userEvent.type(numberTextBox, '{backspace}{backspace}22');
    expect(numberTextBox).toHaveValue('22');
  });
});
