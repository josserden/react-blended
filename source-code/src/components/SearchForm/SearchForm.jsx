import { nanoid } from 'nanoid';
import { FiSearch } from 'react-icons/fi';

import { useLocalStorage } from 'hooks';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todoSlice';

export const SearchForm = () => {
  const [value, setValue] = useLocalStorage('search', '');

  const dispatch = useDispatch();

  const handleInput = e => {
    const { value } = e.currentTarget;

    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      text: value,
    };

    dispatch(addTodo(todo));
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={value}
        autoFocus
      />
    </SearchFormStyled>
  );
};
