// @flow
import React from 'react';
import Select from './Filter.style';

type Props = {
  options: Array<string>,
  selected: (Object) => void,
}

const Filter = (props: Props) => {
  return (
    <Select onChange={props.selected}>
      {props.options.map((option) => (
        <option key={option} value={option} onSelect={props.selected}>{option}</option>
      ))}
    </Select>
  );
};

export default Filter;
