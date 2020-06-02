import React from 'react';
import { Icon } from 'semantic-ui-react';

import './appSpinner.styles.scss';

const AppSpinner = () => {
  return (
    <div className="spinner">
      <Icon loading name='spinner' />
    </div>
  )
}

export default AppSpinner;