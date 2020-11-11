import { ActionTypes } from './actions';

export interface Fact {
    icon_url: string;
    value: string;
    created_at: string;
}
    
export interface InitialState {
    categories: Array<string>;
    answer: Array<Fact>;
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