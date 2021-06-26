import React from 'react';

import { useActions } from '../../hooks/useActions';

const RepositoriesSearch: React.FC<any> = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { searchRepositories } = useActions();

  function validateSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    searchRepositories(searchTerm);
  }
  
  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter package name"
          value={searchTerm}
          onChange={validateSearch}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default RepositoriesSearch;