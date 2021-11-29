import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { Form, Input, DatePicker, Select, Button } from 'antd';

import {formatDate, rules} from 'utils';

const EventForm = ({addEvent, guests}) => {
  const [event, setEvent] = useState({
    author: '',
    date: '',
    description: '',
    guest: '',
    id: '',
  });
  const { Option } = Select;
  const {user} = useSelector(state => state.auth);

  const onFinish = () => {
    const id = Date.now().toString();
    addEvent({...event, author: user.username, id: id});
  };

  const changeDesription = (e) => {
    const value = e.target.value;
    setEvent({...event, description: value});
  }

  const changeDate = (date) => {
    if (date) {
      const eventDate = formatDate(date.toDate());
      setEvent({...event, date: eventDate});
    }
  };

  const changeGuest = (guest) => {
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
