import { render , screen } from '../../test-utils';
import Form from './Form';



test('right names of countries', () => {
  render(<Form />);
  const linkElement = screen.getByText("Sweden");
  const linkElement2 = screen.getByText("China");
  const linkElement3 = screen.getByText("Brazil");
  const linkElement4 = screen.getByText("Australia");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});

test('Input of name and weight',()=>{
  render(<Form/>);
  const inputNode = screen.getByLabelText('Name:', {selector: 'input'})
  const inputNode2 = screen.getByLabelText('Weight kg:', {selector: 'input'})
  
  expect(inputNode).toBeInTheDocument();
  expect(inputNode2).toBeInTheDocument();
  
})