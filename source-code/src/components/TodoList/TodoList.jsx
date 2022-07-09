import { Grid, GridItem, Todo, Text } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from 'redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(getAllTodos);
  const dispatch = useDispatch();

  const handleDelete = id => {
    console.log(id);
  };

  return (
    <Grid>
      {todos.length > 0 ? (
        <Text textAlign="center">There are no any todos ... </Text>
      ) : (
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
              onClick={handleDelete}
              // onEdit={() => handleEdit(todo)}
              // disabled={isEditing}
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};
