// @flow
import React from 'react';
import { InputField } from './Input.styles';

type Props = {
  name: string,
  type: string,
  value: ?string,
  placeholder: ?string,
  changed: (void) => void,
}

const input = (props: Props) => (
  <InputField
    name={props.name}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.changed}
  />
);

export default input;
