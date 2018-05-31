import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

class TodoForm extends React.Component {
  state = {
    todo: '',
  };

  handleInputChange = (e) => {
    const todo = e.target.value;
    this.setState(() => ({ todo }));
  };

  handleSubmit = (e) => {
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

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default TodoForm;
