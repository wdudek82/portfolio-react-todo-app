// @flow
import React from 'react';
import { ContainerGreen } from '../Icons.style';

type Props = {
  completed: boolean,
  toggle: (void) => void,
}

const CheckIcon = (props: Props) => (
  <ContainerGreen onClick={props.toggle} completed={props.completed}>
    {props.completed ? (
      <i className="far fa-check-square" />
    ) : (
      <i className="far fa-square" />
    )}
  </ContainerGreen>
);

export default CheckIcon;
