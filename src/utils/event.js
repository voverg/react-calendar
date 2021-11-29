export const getCurrentEvents = (currentEvent, events) => {
  const currentEventIds = Array.from(currentEvent.children).map(item => item.id);
  const currentEvents = currentEventIds.map(eventId => {
    return events.find(event => event.id === eventId);
  });

  return currentEvents;
}
