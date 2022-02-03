import { render, screen } from '@testing-library/react';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { NavLink } from './NavLink';

const initialState = {};
const mockStore = configureStore();
let store;

afterEach(() => {
  jest.clearAllMocks();
});

describe('NavLink Component', () => {
  it('deve renderizar corretamente o NavSection', () => {
    store = mockStore(initialState);
    const children = 'ChildrenText';
    const href = '/';
    const icon = RiFacebookCircleFill;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavLink icon={icon} href={href}>
            {children}
          </NavLink>
        </BrowserRouter>
      </Provider>
    );

    const childrenNavLink = screen.getByText(children);
    expect(childrenNavLink).toBeInTheDocument();
  });
});
