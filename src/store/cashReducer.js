const defaultState = {cash: 0};

const addCash = 'addCash';
const subCash = 'subCash';

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addCash:
      return {...state, cash: state.cash + action.payload}
    case subCash:
      return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
};

export const addCashAction = (payload) => {
  return {
    type: addCash,
    payload,
  };
};

export const subCashAction = (payload) => {
  return {
    type: subCash,
    payload,
  };
};
