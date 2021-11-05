import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

import {routeNames} from '../routes';

const Navbar = (props) => {
  const { Header, Content, Footer } = Layout;
  const router = useHistory();
  const {isAuth} = useSelector(state => state.auth);

  return (
    <Header>
      <Row justify="end">
        {isAuth
          ?
          <React.Fragment>
            <div className="navbar__user-name">Вовка</div>
            <Col span={3}>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                  key={1}
                  onClick={() => console.log('Выйти')}
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
