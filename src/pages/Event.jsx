import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Layout, Row, Button, Modal } from 'antd';

import {Navbar, EventCalendar, EventForm, EventDetails} from 'components';
import {useActions} from 'hooks/useActions.js';
import {getCurrentEvents} from 'utils';

const Event = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [eventDetailsVisible, setEventDetailsVisible] = useState(false);
  const [currentEvents, setCurrentEvents] = useState([]);
  const {guests, events} = useSelector(state => state.event);
  const {fetchGuests, fetchEvents, createEvent} = useActions();
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

  const handleCalendar = (event) => {
    let target = event.target;

    if (target.closest('.events')) {
      target = target.closest('.events');
    }

    if (target.className === 'events') {
      setCurrentEvents(getCurrentEvents(target, events))
      setEventDetailsVisible(true)
    }
  }

  return (
    <Layout>
      <Navbar setModalVisible={setModalVisible} />

      <div className="calendar-wrap" onClick={handleCalendar}>
        <EventCalendar
          events={events}
        />
      </div>

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

      <Modal
        title="Детали событий"
        visible={eventDetailsVisible}
        onCancel={() => setEventDetailsVisible(false)}
        footer={null}
      >
        <EventDetails
          currentEvents={currentEvents}
        />
      </Modal>
    </Layout>
  );
};

export default Event;
