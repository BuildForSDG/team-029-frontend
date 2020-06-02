import React from 'react';
import { render, cleanup } from '@testing-library/react';
import withNavbar from './withNavbar';

afterEach(cleanup);

const TestPage = () => (
  <div>
    <h1>this is a test sample page</h1>
    <a>this is a link</a>
  </div>
)


it('Should render wrapped component with a navbar', () => {
  const Component = () => withNavbar(TestPage, { navProps: {}, componentProps: {} })
  const { container } = render(<Component />)
  expect(container.querySelector('.nav-container')).toBeTruthy()
});

it('Should hide nav link based on props', () => {
  const Component = () => withNavbar(TestPage, { navProps: { hasLinks: false }, componentProps: {} })
  const { container } = render(<Component />)
  expect(container.querySelector('.nav-container a')).toBeFalsy()
});