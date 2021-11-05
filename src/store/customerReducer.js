const defaultState = {customers: [
  {id: Date.now(), name: 'dick'},
]};

const addCustomerList = 'addCustomerList';
const addCustomer = 'addCustomer';
const delCustomer = 'delCustomer';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addCustomerList:
      return {...state, customers: [...state.customers, ...action.payload]}
    case addCustomer:
      return {...state, customers: [...state.customers, action.payload]}
    case delCustomer:
      return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]};
    default:
      return state;
  }
};

export const addCustomerListAction = (payload) => {
  // console.log(payload);
  return {
    type: addCustomerList,
    payload,
  };
};

export const addCustomerAction = (payload) => {
  return {
    type: addCustomer,
    payload,
  };
};

export const delCustomerAction = (payload) => {
  return {
    type: delCustomer,
    payload,
  };
};
