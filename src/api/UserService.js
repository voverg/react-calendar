import {users} from 'data/users.js';

// export const getUser = (username) => {
//     const users = UserService.getUsers();
//     const user = users.find(user => user.username === username);

//     return user;
//   },

export default class UserService {
  static getUsers(url) {
    const data = users;
    return data;
  }

  static getUser(username) {
    const user = users.find(user => user.username === username);
    return user;
  }
}
