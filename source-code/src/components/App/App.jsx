import {
  Container,
  EditForm,
  Header,
  SearchForm,
  Section,
  TodoList,
} from 'components';
import { useLocalStorage } from 'hooks';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useLocalStorage('todos', []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    setValue([...value, todo]);
  };

  const handleSubmit = todo => {
    addTodo(todo);
  };

  const deleteTodo = id => {
    setValue(value.filter(todo => todo.id !== id));
  };

  const toggleEdit = () => setIsEditing(prevState => !prevState);

  const handleEdit = todo => {
    setCurrentTodo({ ...todo });
    toggleEdit();
  };

  const handleCancel = () => {
    toggleEdit();
  };

  const handleInputEditChange = e => {
    const { value } = e.target;

    setCurrentTodo({ ...currentTodo, text: value.trim() });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = value.map(todo => {
      return todo.id === id ? updatedTodo : todo;
    });

    toggleEdit();
    setValue(updatedItem);
  };

  const handleEditFormUpdate = e => {
    e.preventDefault();

    if (currentTodo.text === '') {
      return alert('Enter some text!');
    }

    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <>
      <Header />

      <Section>
        <Container>
          {isEditing ? (
            <EditForm
              onCancel={handleCancel}
              currentTodo={currentTodo}
              onUpdate={handleEditFormUpdate}
              onChange={handleInputEditChange}
            />
          ) : (
            <SearchForm onSubmit={handleSubmit} />
          )}

          <TodoList />
        </Container>
      </Section>
    </>
  );
};
