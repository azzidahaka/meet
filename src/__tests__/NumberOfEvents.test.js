
import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';


describe('<NumberOfEvent /> component', () => {
  let NumberOfEventComponent;
  beforeEach(() => {
    NumberOfEventComponent = render(<NumberOfEvents />);
  });
  test('render text input', () => {});
});
