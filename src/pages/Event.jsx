import React, {useState} from 'react';
import { Layout, Row, Button, Modal } from 'antd';

import {EventCalendar} from '../components';

const Event = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

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
        EventForm
      </Modal>
    </Layout>
  );
};

export default Event;
