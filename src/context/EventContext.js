import React, { createContext, useContext, useEffect, useState } from "react";
import { getEvents } from "../api/eventAPIs";
export const EventContext = createContext(null);

export default function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [isAddingMode, setIsAddingMode] = useState(false);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
    // getEvents().then(setEvents);
  }, []);

  function handleAdd() {
    setIsAddingMode(true);
  }

  function updateEvent(id, editedEvent) {
    setEvents((prev) => {
      return prev.map((pEvent) => {
        if (pEvent.id === id) {
          return editedEvent;
        }
        return pEvent;
      });
    });
  }

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        setIsAddingMode,
        isAddingMode,
        handleAdd,
        updateEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  return useContext(EventContext);
}
