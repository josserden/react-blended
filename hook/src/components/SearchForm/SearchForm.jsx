import { FiSearch } from 'react-icons/fi';

import { useLocalStorage } from 'hooks';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useLocalStorage('search', '');

  const handleInput = e => {
    const { value } = e.currentTarget;
    const normalizedValue = value.toLowerCase().trim();

    setValue(normalizedValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value);
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
