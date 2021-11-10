export const authActionList = {
  SET_AUTH: 'SET_AUTH',
  SET_ERROR: 'SET_ERROR',
  SET_USER: 'SET_USER',
  SET_IS_LOADING: 'SET_IS_LOADING',
};

const initialState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {},
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionList.SET_AUTH: {
      return {...state, isAuth: action.payload, isLoading: false}
    }
    case authActionList.SET_ERROR: {
      return {...state, error: action.payload, isLoading: false}
    }
    case authActionList.SET_USER: {
      return {...state, user: action.payload}
    }
    case authActionList.SET_IS_LOADING: {
      return {...state, isLoading: action.payload}
    }
    default: {
      return state;
    }
  }

};
