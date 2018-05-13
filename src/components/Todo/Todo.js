import React from 'react';

import TodoList from './TodoList/TodoList';

import { Container } from './style';

class Todo extends React.Component {
  state = {
    todoLists: [
      {
        title: 'My List',
        todoItems: [
          {
            text: 'Buy milk',
            priority: 0,
            completed: false,
          },
          {
            text: 'Create next app',
            priority: 0,
            completed: false,
          },
          {
            text: 'Discover',
            priority: 0,
            completed: false,
          },
        ],
        archived: false
      },
      {
        title: 'Groceries',
        todoItems: [
          {
            text: 'Buy milk',
            priority: 0,
            completed: true,
          },
          {
            text: 'Create next app',
            priority: 0,
            completed: false,
          },
          {
            text: 'Discover',
            priority: 0,
            completed: true,
          },
        ],
        archived: true
      },
    ],
    filter: null
  }

  handleToggleListItem = (listInd, itemInd) => {
    console.log('It works!', listInd, itemInd);

    this.setState((prevState) => {
      let toggledItem = prevState.todoLists[listInd].todoItems[itemInd];
      toggledItem.completed = !toggledItem.completed;
    });

    console.log(this.state.todoLists);
  }

  handleDeleteListItem = (listInd, itemInd) => {
    console.log('Delete item handler', listInd, itemInd);
    const updatedTodoList = this.state.todoLists[listInd].todoItems.splice(itemInd, 1);
    console.log(updatedTodoList);
  }

  render() {
    const todoLists = this.state.todoLists.map((todoList, ind) => (
      <TodoList
        key={`${todoList.title}-${ind}`}
        title={todoList.title}
        listIndex={ind}
        todoItems={todoList.todoItems}
        archived={todoList.archived}
        toggleItem={this.handleToggleListItem}
        deleteItem={this.handleDeleteListItem}
      />
    ));
    
    return (
      <Container>
        <header>ToDo</header>
        {
          todoLists.length > 0 ?
          todoLists :
          'Currently you have no lists'
        }
      </Container>
    );
  }
}

export default Todo;
