export const authState = {
  isAuth: false,
}

export const authActionList = {
  SET_AUTH: 'SET_AUTH',
};

export const setAuthAction = (payload) => {
  return {
    type: authActionList.SET_AUTH,
    payload,
  };
};
