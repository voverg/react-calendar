import React from 'react';

import UserService from 'api/UserService.js';

const EventDetails = ({currentEvents}) => {

  return (
    <div className="event-details">
      {currentEvents.map(event =>
        <div key={event.id} className="current-event">
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
          </div>

        </div>
      )}
    </div>
  );
};

export default EventDetails;
