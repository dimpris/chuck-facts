import { ActionTypes } from './actions';
    
export interface InitialState {
    categories: Array<string>;
    answer: Array<any>;
}
export const initialState = {
    categories: [],
    answer: []
};

export function FactsReducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.GetCategories:
        return {
          ...state,
          categories: [...action.payload]
        };
      case ActionTypes.GetRandomFact:
        return {
          ...state,
          answer: [...action.payload]
        };
    case ActionTypes.Search:
        return {
          ...state,
          answer: [...action.payload]
        };
      
      default:
        return state;
    }
  }