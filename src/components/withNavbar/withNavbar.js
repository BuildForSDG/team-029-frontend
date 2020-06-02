import React, { Fragment } from 'react';
import Navbar from '../navbar/Navbar.jsx'

const withNavbar = (Component, { navProps, componentProps }) => (
  <Fragment>
    <Navbar {...navProps} />
    <Component {...componentProps} />
  </Fragment>
)

export default withNavbar;