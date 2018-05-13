import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 300px;
`;

class TodoForm extends React.Component {
  state = {
    todo: ''
  }

  handleInputChange = (e) => {
    const todo = e.target.value;
    this.setState(() => ({ todo }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.todo) {
      this.props.addItem(this.state.todo);
      this.setState(() => ({ todo: '' }));
    }
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e, this.state.todo)}>
        <Input
          name="todo"
          type="text"
          value={this.state.todo}
          placeholder="New Item"
          changed={(e) => this.handleInputChange(e, this.state.todo)}
        />
        <Button
          text="Add"
          size="sm"
          mb="1rem"
        />
      </Form>
    );
  }
};

export default TodoForm;