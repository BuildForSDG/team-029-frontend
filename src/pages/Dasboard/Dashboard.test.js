import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard.jsx';

afterEach(cleanup);

it('Should render <Dashboard /> page component', () => {
  const { container, asFragment } = render(<MemoryRouter><Dashboard /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
  expect(container.querySelector('.main-content')).toBeTruthy()
  expect(container.querySelector('.topbar-nav-btn')).toBeFalsy()
});
