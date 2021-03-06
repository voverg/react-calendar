import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {publicRoutes, privateRoutes, routeNames} from '../routes';

const AppRouter = (props) => {
  const {isAuth} = useSelector(state => state.auth);

  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        )}
        <Redirect to={routeNames.EVENT} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        )}
        <Redirect to={routeNames.LOGIN} />
      </Switch>
  );
};

export default AppRouter;
