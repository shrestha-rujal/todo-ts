import { ACTION_TYPES } from '../actionTypes';

interface SearchRepositoriesAction {
  type: ACTION_TYPES.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ACTION_TYPES.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ACTION_TYPES.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type RepositoriesAction = 
  | SearchRepositoriesAction 
  | SearchRepositoriesSuccessAction 
  | SearchRepositoriesErrorAction;
