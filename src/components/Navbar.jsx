import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Layout, Menu, Row, Col } from 'antd';

import {routeNames} from 'routes';
import {useActions} from 'hooks/useActions.js';
import {BaseButton} from 'components/ui';

const Navbar = (props) => {
  const { Header } = Layout;
  const router = useHistory();
  const {isAuth, user} = useSelector(state => state.auth);
  const {logout} = useActions();

  return (
    <header className="navbar">
        {isAuth
          ?
          <React.Fragment>
            <BaseButton
              className="navbar__add-btn"
              onClick={() => props.setModalVisible(true)}
            >
              Добавить событие
            </BaseButton>

            <div className="navbar__user-name">{user.name}</div>

            <nav className="havbar__nav">
              <div
                className="navbar__item"
                key={1}
                onClick={logout}
              >
                Выйти
              </div>
            </nav>
          </React.Fragment>
          :
          <React.Fragment>
            <div className="logo"></div>
            <nav className="havbar__nav">
              <div
                className="navbar__item"
                key={1}
                onClick={() => router.push(routeNames.LOGIN)}
              >
                Login
              </div>
            </nav>
          </React.Fragment>
        }

    </header>
  );
};

export default Navbar;
