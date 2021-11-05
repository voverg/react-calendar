import {authActionList} from './types.js';
import axios from 'axios';

export const AuthActionCreators = {
  setUser: (user) => ({
    type: authActionList.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth) => ({
    type: authActionList.SET_AUTH,
    payload: auth,
  }),
  setError: (payload) => ({
    type: authActionList.SET_ERROR,
    payload,
  }),
  setIsLoading: (payload) => ({
    type: authActionList.SET_IS_LOADING,
    payload,
  }),
  login: (username, password) => async (dispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));

      setTimeout(async () => {
        const response = await axios.get('./users.json');
        const mockUser = response.data.find(user => user.username === username && user.password === password);

        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(mockUser));
        } else {
          dispatch(AuthActionCreators.setError('Не корректный логин или пароль'))
        }
      }, 500);

      // dispatch(AuthActionCreators.setIsLoading(false));
    } catch (error) {
      dispatch(AuthActionCreators.setError('Произошла ошибка при логине: ', error));
    }
  },
  logout: () => async (dispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({}));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
}
