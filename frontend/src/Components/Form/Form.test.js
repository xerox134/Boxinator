import { render , screen } from '../../test-utils';
import {Provider} from 'react-redux'
import Form from './Form';



// const render = component => rtlRender(
// <Provider store={store}>
//   { component}
// </Provider>
// )

test('renders learn react link', () => {
  render(<Form />);
  expect(screen.getByText("Sweden")).toBeInTheDocument();
});
