import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },

    updateTodo: (state, { payload }) =>
      state.todos.map(item => {
        return item.id === payload.id ? payload : item;
      }),
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Selectors

export const getAllTodos = state => state.todos;
