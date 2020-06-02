import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard.jsx';

afterEach(cleanup);

it('Should render <Dashboard /> page component', () => {
  const push = () => { };
  const { container, asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Dashboard history={{ push }} />
      </MemoryRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
  expect(container.querySelector('.main-content')).toBeTruthy()
  expect(container.querySelector('.topbar-nav-btn')).toBeFalsy()
});
