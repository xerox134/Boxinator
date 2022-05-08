import { render , screen } from '../../test-utils';
import Form from './Form';


test('renders learn react link', () => {
  render(<Form />);
  expect(screen.getByText("Sweden")).toBeInTheDocument();
});
