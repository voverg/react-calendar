import {eventActionList} from './';
import UserService from '../../../api/UserService.js';

export const EventActionCreators = {
  setGuests: (guests) => ({
    type: eventActionList.SET_GUESTS,
    payload: guests,
  }),
  setEvent: (events) => ({
    type: eventActionList.SET_EVENTS,
    payload: events,
  }),
  fetchGuests: () => (dispatch) => {
    try {
      const users = UserService.getUsers();
      dispatch(EventActionCreators.setGuests(users));
    }
    catch (error) {
      console.log('Ошибка при получении списка пользователей: ', error);
    }
  }
};
