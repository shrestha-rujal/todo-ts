import { RepositoriesAction } from '../actions';
import { ACTION_TYPES } from '../actionTypes';

interface RepositoriesState {
  data: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  data: ['dummy-package 1', 'dummy-pacakge-2'],
  isLoading: false,
  error: null,
};

const reducer = (state: RepositoriesState = initialState, action: RepositoriesAction): RepositoriesState => {
  switch(action.type) {
    case ACTION_TYPES.SEARCH_REPOSITORIES:
      return { data: [], isLoading: true, error: null };
    case ACTION_TYPES.SEARCH_REPOSITORIES_SUCCESS:
      return { data: action.payload, error: null, isLoading: false };
    case ACTION_TYPES.SEARCH_REPOSITORIES_ERROR:
      return { data: [], error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default reducer;