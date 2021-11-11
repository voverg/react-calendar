import {eventActionList} from './';
import UserService from 'api/UserService.js';

export const EventActionCreators = {
  setGuests: (guests) => ({
    type: eventActionList.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events) => ({
    type: eventActionList.SET_EVENTS,
    payload: events,
  }),
  fetchGuests: () => (dispatch) => {
    try {
      const users = UserService.getUsers();
      dispatch(EventActionCreators.setGuests(users));
    } catch (error) {
      console.log('Ошибка при получении списка пользователей: ', error);
    }
  },
  createEvent: (event) => (dispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events);
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: (username) => (dispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events);
      const userEvents = json.filter(event => event.guest === username || event.author === username);
      dispatch(EventActionCreators.setEvents(userEvents));
    } catch (error) {
      console.log(error);
    }
  }

};
