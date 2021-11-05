import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Input, Button } from 'antd';

import {rules} from '../utils/rules.js';
import {AuthActionCreators} from '../store/reducers/auth/actionCreators.js';

const LoginFrom = (props) => {
  const dispatch = useDispatch();
  const {error, isLoading} = useSelector(state => state.auth);

  const onFinish = (values) => {
    dispatch(AuthActionCreators.login(values.username, values.password));
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

      <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
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
