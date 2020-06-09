import React from 'react';
import { Select } from 'semantic-ui-react'

import './select.styles.scss'
const SelectInput = ({ options, placeholder, label, onChange }) => {
  return (
    <div className="select-input-wrapper">
      {label && (<label>{label}</label>)}
      <Select onChange={onChange} className="" placeholder={placeholder} options={options} />
    </div>
  )
}

export default SelectInput;