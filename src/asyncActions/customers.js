import {addCustomerListAction} from '../store/customerReducer.js';

export const fetchCustomers = () => {
  return function(dispatcher) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatcher( addCustomerListAction(json)) )
  }
};
