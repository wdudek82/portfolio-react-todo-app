// @flow
import React from 'react';
import { ContainerRed } from '../Icons.style';

type Props = {
  delete: (void) => void,
}

const DeleteIcon = (props: Props) => (
  <ContainerRed onClick={props.delete}>
    <i className="far fa-times-circle" />
  </ContainerRed>
);

export default DeleteIcon;
