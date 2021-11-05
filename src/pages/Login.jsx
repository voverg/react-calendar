import React from 'react';
import { Layout, Row, Col, Card } from 'antd';

import {LoginForm} from '../components';

const Login = (props) => {

  return (
    <div className="login">
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </div>
  );
};

export default Login;
