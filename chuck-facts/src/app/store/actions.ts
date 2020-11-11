export enum ActionTypes {
    GetCategories,
    Search,
    GetRandomFact
  }
  export const GetCategories = payload => {
    return {
      type: ActionTypes.GetCategories,
      payload
    };
  };
  export const GetRandomFact = payload => ({
    type: ActionTypes.GetRandomFact,
    payload
  });
  export const Search = payload => ({
    type: ActionTypes.Search,
    payload
  });