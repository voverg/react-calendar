export const eventActionList = {
  SET_GUESTS: 'SET_GUESTS',
  SET_EVENTS: 'SET_EVENTS',
};

const initialState = {
  guests: [],
  events: [],
};

export default function eventReduser(state = initialState, action) {
  switch (action.type) {
    case eventActionList.SET_GUESTS:
      return {...state, guests: action.payload}
    case eventActionList.SET_EVENTS:
      return {...state, events: action.payload}
    default:
      return state;
  }
}
