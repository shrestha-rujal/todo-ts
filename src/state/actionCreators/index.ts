import axios from 'axios';
import Redux from 'redux';

import { NPM_URL } from '../../constants/urls';
import { ACTION_TYPES } from '../actionTypes';
import { RepositoriesAction } from '../actions';

export const searchRepositories = (searchTerm: string) => async (dispatch: Redux.Dispatch<RepositoriesAction>) => {
  dispatch({ type: ACTION_TYPES.SEARCH_REPOSITORIES });

  try {
    const { data: { objects: repositories } } = await axios.get(NPM_URL, { params: {
      text: searchTerm,
    }});

    const repositoryNames = repositories.map((repository: any) => repository.package.name);

    console.log('REPO NAMES:', repositoryNames);
    
    dispatch({ type: ACTION_TYPES.SEARCH_REPOSITORIES_SUCCESS, payload: repositoryNames });
  } catch (err) {
    dispatch({ type: ACTION_TYPES.SEARCH_REPOSITORIES_ERROR, payload: err.message });
  }
};