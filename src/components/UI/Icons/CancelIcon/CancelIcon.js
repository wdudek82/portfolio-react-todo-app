// @flow
import React from 'react';
import { ContainerRed } from '../Icons.style';

type Props = {
  isEdited: boolean,
  cancelUpdate: (void) => void,
}

const CancelIcon = (props: Props) => (
  <ContainerRed onClick={props.cancelUpdate} edited={props.isEdited}>
    <i className="fas fa-ban" />
  </ContainerRed>
);

export default CancelIcon;
