import React from 'react';
import { Layout, Row, Col, Card } from 'antd';

import {Navbar, LoginForm} from 'components';

const Login = (props) => {

  return (
    <div className="login">
      <Navbar />
      <Row justify="center" align="middle" className="h100">
        <Card>
          <div className="card__header">
            <p>
              Авторизуйтесь, чтобы войти.<br />
              Демо-вход: логин - <b>user</b>, пароль - <b>123</b>
            </p>
          </div>
          <LoginForm />
        </Card>
      </Row>
    </div>
  );
};

export default Login;
