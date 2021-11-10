import React, {useState} from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';

import {rules} from '../utils/rules.js';

const EventForm = ({guests}) => {
  const [event, setEvent] = useState({
    author: '',
    date: '',
    description: '',
    guest: '',
  });
  const { Option } = Select;

  const onFinish = (values) => {
    console.log(values);
  };

  const changeDesription = (event) => {
    const value = event.target.value;
    setEvent({...event, description: value});
  }

  const changeDate = (date, dateString) => {
    console.log(date, dateString);
    setEvent({...event, date: date})
  };

  const changeGuest = (guest) => {
    console.log(`selected ${guest}`);
    setEvent({...event, guest: guest});
  };

  return (
    <Form
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Событие"
        name="description"
        rules={[rules.required()]}
      >
        <Input onChange={changeDesription} />
      </Form.Item>

      <Form.Item
        label="Дата"
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker
          onChange={changeDate}
          />
      </Form.Item>

      <Form.Item
        label="Участник"
        name="guest"
        rules={[rules.required()]}
      >
        <Select style={{ width: 220 }} onChange={changeGuest}>
          {guests.map(guest =>
            <Option key={guest.username} value={guest.username}>
              {guest.name}
            </Option>
          )}

        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Добавить событие
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
