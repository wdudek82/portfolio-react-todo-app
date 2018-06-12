// @flow
import React from 'react';
import { ContainerGreen } from '../Icons.style';

type Props = {
  isEdited: boolean,
  save: (void) => void,
}

const ApplyIcon = (props: Props) => (
  <ContainerGreen
    onClick={props.save}
    edited={props.isEdited}
  >
    <i className="far fa-check-circle" />
  </ContainerGreen>
);

export default ApplyIcon;
