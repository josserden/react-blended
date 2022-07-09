import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Section,
  Container,
  Grid,
  GridItem,
  SearchForm,
  EditForm,
  Text,
  Todo,
  Header,
} from 'components';
import { useLocalStorage } from 'hooks';

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

          {value.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {value.length > 0 &&
              value.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                    onEdit={() => handleEdit(todo)}
                    disabled={isEditing}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
