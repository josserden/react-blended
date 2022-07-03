import React, { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { BtnSearch, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase().trim(),
    });
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    this.props.onSubmit(query);

    this.setState({
      query: '',
    });
  };
  render() {
    const { query } = this.state;

    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <BtnSearch type="submit">
          <FiSearch size="16px" />
        </BtnSearch>
        <InputSearch
          onChange={this.handleInput}
          placeholder="Search..."
          name="search"
          required
          value={query}
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}
