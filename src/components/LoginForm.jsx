import React from 'react';
import {useSelector} from 'react-redux';
import { Form, Input, Button } from 'antd';

import {rules} from '../utils/rules.js';
import {useActions} from '../hooks/useActions.js';

const LoginFrom = (props) => {
  const {error, isLoading} = useSelector(state => state.auth);
  const {login} = useActions();

  const onFinish = (values) => {
    login(values.username, values.password);
  };

  return (
    <Form
      onFinish={onFinish}
      autoComplete="off"
    >
      {error &&
        <div className="error-text">{error}</div>
      }

      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите ваше имя!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginFrom;
