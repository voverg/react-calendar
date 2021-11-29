import React from 'react';
import { Calendar, Badge } from 'antd';

import {formatDate} from 'utils';

const EventCalendar = ({events}) => {
  function dateCellRender(value) {
    const dateFormatted = formatDate(value.toDate());
    const currentEvents = events.filter(event => event.date === dateFormatted);
    // console.log(currentEvents);

    return (
      <div className="events">
        {currentEvents.map( (event) => (
          <div key={event.id} id={event.id} className="events-item" >
            <Badge
              status="success"
              text={event.description}
            />
          </div>
        ))}
      </div>
    );

  }

  return (
    <Calendar dateCellRender={dateCellRender} />
  );
};

export default EventCalendar;
