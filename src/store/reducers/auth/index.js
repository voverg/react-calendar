import {setAuthAction, authActionList} from './types.js';

const initialState = {
  isAuth: true,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionList.SET_AUTH: {
      return {...state, isAuth: action.payload}
    }
    default: {
      return state;
    }
  }

};
