import {authActionList} from './';
import UserService from 'api/UserService.js';

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
        const users = UserService.getUsers();
        const mockUser = users.find(user => user.username === username && user.password === password);

        if (mockUser) {
          localStorage.setItem('calendarAuth', 'true');
          localStorage.setItem('username', mockUser.username);
          // localStorage.setItem('name', mockUser.name);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setIsAuth(true));
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
    localStorage.removeItem('calendarAuth');
    localStorage.removeItem('username');
    // localStorage.removeItem('name');
    dispatch(AuthActionCreators.setUser({}));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
}
