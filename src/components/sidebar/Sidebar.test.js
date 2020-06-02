import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar.jsx';

afterEach(cleanup);

const routes = [
  {
    path: '/testzero',
    active: 'testzero',
    name: 'testzero',
    exact: true,
    main: () => <h1>This is a test</h1>
  },
  {
    path: '/test/worden',
    active: 'test',
    name: 'test',
    main: () => <h1>This is another test page</h1>
  },
]

it('Should render <Sidebar /> component with the given property', () => {
  const mockSideToggler = jest.fn((value) => value)
  const { container, getByAltText } = render(
    <MemoryRouter>
      <Sidebar isOpen={true} toggleSideNav={mockSideToggler} routes={routes} />
    </MemoryRouter>
  );
  expect(container.querySelector('a[href="/testzero"]')).toBeTruthy()
  expect(container.querySelector('a[href="/test/worden"]')).toBeTruthy()
  fireEvent.click(getByAltText('close'))
  expect(mockSideToggler.mock.calls.length).toBe(1);
});