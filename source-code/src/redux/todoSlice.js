import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.items = [...payload, ...state.items];
    },

    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    updateTodo: (state, { payload }) => {
      return state.items.map(item => {
        return item.id === payload.id ? payload : item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Selectors

export const getAllTodos = state => state.todos;
