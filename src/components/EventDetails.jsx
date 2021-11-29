import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import UserService from 'api/UserService.js';
import {BaseButton} from 'components/ui';

const EventDetails = ({currentEvents, deleteEvent}) => {
  const handleDeleteEvent = (event) => {
    const eventId = event.target.closest('.current-event').id;
    deleteEvent(eventId);
  }

  return (
    <div className="event-details">
      {currentEvents.map(event =>
        <div key={event.id} id={event.id} className="current-event">
          <div className="current-event__header">
            {event.description}
          </div>

          <div className="current-event__body">
            <div className="current-event__author">
              Событие создал: <b>{UserService.getUser(event.author).name}</b>
            </div>
            <div className="current-event__date">
              Дата события: <b>{event.date}</b>
            </div>
            <div className="current-event__guest">
              Событие назначено: <b>{UserService.getUser(event.guest).name}</b>
            </div>
            <BaseButton
              className="current-event__delete"
              onClick={handleDeleteEvent}
            >
              Удалить событие
            </BaseButton>
          </div>

        </div>
      )}
    </div>
  );
};

export default EventDetails;
