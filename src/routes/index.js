import {Event, Login} from '../pages';

export const routeNames = {
  LOGIN: '/login',
  EVENT: '/',
}

export const publicRoutes = [
  {path: routeNames.LOGIN, component: Login, exact: true},
];

export const privateRoutes = [
  {path: routeNames.EVENT, component: Event, exact: true},
];


