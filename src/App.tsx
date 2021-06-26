import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import RepositoriesSearch from './components/RepositoriesSearch';
import RepositoriesList from './components/RepositoriesList';

import { store } from './state';
import './App.css';

function App() {  
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <h1>NPM package directory</h1>
        <RepositoriesSearch />
        <RepositoriesList />
      </div>
    </ReduxProvider>
  );
}

export default App;
