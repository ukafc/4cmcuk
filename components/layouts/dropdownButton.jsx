import React, { useState } from 'react';
import { Dropdown } from 'reactstrap';

export default function DropdownButton(props) {
  const [isOpen, updateIsOpen] = useState(false);

  return (
    <Dropdown className=''
      {...props}
      onMouseOver={() => updateIsOpen(true)}
      onFocus={() => updateIsOpen(true)}
      onMouseLeave={() => updateIsOpen(false)}
      onBlur={() => updateIsOpen(false)}
      toggle={() => updateIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      {props.children}  
    </Dropdown>
  );
}