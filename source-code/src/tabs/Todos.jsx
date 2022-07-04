import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text } from 'components';
import { Todo } from 'components/Todo/Todo';

export class Todos extends Component {
  state = {
    todos: [],
    isEditing: false,
    currentTodo: {},
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
      this.setState(() => ({ todos }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;

    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };
  handleSubmit = data => {
    this.addTodo(data);
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  handleEdit = todo => {
    this.setState({
      currentTodo: { ...todo },
      isEditing: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isEditing: false,
    });
  };

  handleInputEditChange = e => {
    const { currentTodo } = this.state;

    this.setState({
      currentTodo: {
        ...currentTodo,
        text: e.target.value.trim(),
      },
    });
  };

  handleUpdateTodo = (id, updatedTodo) => {
    const { todos } = this.state;

    const updatedItem = todos.map(todo => {
      console.log(todo.id === id);

      return todo.id === id ? updatedTodo : todo;
    });

    console.log(updatedTodo);

    this.setState({
      isEditing: false,
      todos: updatedItem,
    });
  };

  handleEditFormUpdate = e => {
    e.preventDefault();

    const { currentTodo } = this.state;

    if (currentTodo.text === '') {
      return alert('Enter some text!');
    }

    this.handleUpdateTodo(currentTodo.id, currentTodo);
  };

  render() {
    const { todos, isEditing, currentTodo } = this.state;

    return (
      <>
        {isEditing ? (
          <EditForm
            onCancel={this.handleCancel}
            currentTodo={currentTodo}
            onUpdate={this.handleEditFormUpdate}
            onChange={this.handleInputEditChange}
          />
        ) : (
          <SearchForm onSubmit={this.handleSubmit} />
        )}

        {todos.length === 0 && (
          <Text textAlign="center">There are no any todos ... </Text>
        )}

        <Grid>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <GridItem key={todo.id}>
                <Todo
                  id={todo.id}
                  text={todo.text}
                  counter={index + 1}
                  onClick={this.deleteTodo}
                  onEdit={() => this.handleEdit(todo)}
                  disabled={isEditing}
                />
              </GridItem>
            ))}
        </Grid>
      </>
    );
  }
}
