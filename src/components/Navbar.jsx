import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Layout, Menu, Row, Col } from 'antd';

import {routeNames} from '../routes';
import {useActions} from '../hooks/useActions.js';

const Navbar = (props) => {
  const { Header } = Layout;
  const router = useHistory();
  const {isAuth, user} = useSelector(state => state.auth);
  const {logout} = useActions();

  return (
    <Header>
      <Row justify="end">
        {isAuth
          ?
          <React.Fragment>
            <div className="navbar__user-name">{user.username}</div>
            <Col span={3}>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                  key={1}
                  onClick={logout}
                >
                  Выйти
                </Menu.Item>
              </Menu>
            </Col>
          </React.Fragment>
          :
          <Col span={3}>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                key={1}
                onClick={() => router.push(routeNames.LOGIN)}
              >
                Login
              </Menu.Item>
            </Menu>
          </Col>
        }

      </Row>
    </Header>
  );
};

export default Navbar;
