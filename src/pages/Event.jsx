import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Layout, Row, Button, Modal } from 'antd';

import {EventCalendar, EventForm} from '../components';
import {useActions} from 'hooks/useActions.js';

const Event = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {fetchGuests} = useActions();
  const {guests} = useSelector(state => state.event);

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout>
      <EventCalendar
        events={[]}
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
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
