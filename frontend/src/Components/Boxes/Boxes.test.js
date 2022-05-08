import { render , screen } from '../../test-utils';
import Form from './Boxes';





test('Should render same text passed into title prop', () => {
  render(<Form title="My Boxlist"/>);
  const headingElement = screen.getByText(/my boxlist/i)
  expect(headingElement).toBeInTheDocument();
});
