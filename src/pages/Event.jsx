import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Layout, Row, Button, Modal } from 'antd';

import {EventCalendar, EventForm} from '../components';
import {useActions} from 'hooks/useActions.js';

const Event = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {fetchGuests, fetchEvents, createEvent} = useActions();
  const {guests, events} = useSelector(state => state.event);
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addEvent = (event) => {
    setModalVisible(false);
    createEvent(event);
    fetchEvents(user.username);
  };

  return (
    <Layout>
      <EventCalendar
        events={events}
      />

      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
        >
          Добавить событие
        </Button>
      </Row>

      <Modal
        title="Новое событие"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <EventForm
          addEvent={addEvent}
          guests={guests}
        />
      </Modal>
    </Layout>
  );
};

export default Event;
