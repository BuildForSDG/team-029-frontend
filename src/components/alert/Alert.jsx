import React from 'react';
import { Icon } from 'semantic-ui-react';
import { string, func } from 'prop-types';

import './alert.styles.scss';

const Alert = ({ type, iconName, onClose, message }) => {
  return (
    <div className={`alert ${type}`}>
      <div className="message-wrapper">
        <Icon name={iconName} />
        <h3>{message}</h3>
      </div>
      <Icon className="close-icon" name="close" onClick={onClose} />
    </div>
  )
}

Alert.defaultProps = {
  type: "success",
  onClose: () => { },
  message: "Alert message",
  iconName: "good"
}

Alert.propTypes = {
  type: string,
  onClose: func,
  message: string,
  iconName: string
}

export default Alert;