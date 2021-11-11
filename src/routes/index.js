import {Event, Login} from '../pages';

export const routeNames = {
  LOGIN: '/react-calendar/login',
  EVENT: '/react-calendar',
}

export const publicRoutes = [
  {path: routeNames.LOGIN, component: Login, exact: true},
];

export const privateRoutes = [
  {path: routeNames.EVENT, component: Event, exact: true},
];


