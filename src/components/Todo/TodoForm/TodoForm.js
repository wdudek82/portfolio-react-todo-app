// @flow
import React from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

type Props = {
  addItem: (string) => void,
}

type State = {
  todo: string,
}

class TodoForm extends React.Component<Props, State> {
  state = {
    todo: '',
  };

  handleInputChange = (e) => {
    const todo = e.currentTarget.value;
    this.setState(() => ({ todo }));
  };

  handleSubmit = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (this.state.todo) {
      this.props.addItem(this.state.todo);
      this.setState(() => ({ todo: '' }));
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="todo"
          type="text"
          value={this.state.todo}
          placeholder="New Item"
          changed={this.handleInputChange}
        />
        <Button text="Add" size="sm" mb="1rem" ml="1rem" />
      </Form>
    );
  }
}

export default TodoForm;
