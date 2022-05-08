import { render , screen } from '../../test-utils';
import Boxes from './Boxes';





test('Should render h1 of boxlist', () => {
  render(<Boxes/>);
  const linkElement = screen.getByText("BoxList");
    expect(linkElement).toBeInTheDocument();
});




test('All our table headers should render', () => {
  render(<Boxes/>);
  const linkElement = screen.getByText("Receiver");
  const linkElement2 = screen.getByText("Weight");
  const linkElement3 = screen.getByText("Country");
  const linkElement4 = screen.getByText("ShippingCost");
  const linkElement5 = screen.getByText("Color");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
  expect(linkElement5).toBeInTheDocument();
});
