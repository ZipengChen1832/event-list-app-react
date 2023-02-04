import React, { useEffect, useState } from "react";
import AddEventBtn from "./components/AddEventBtn/AddEventBtn";
import EventTable from "./components/EventTable/EventTable";
import { EventContext } from "./context/EventContext";
import { getEvents } from "./api/eventAPIs";

export default function App() {
  const [events, setEvents] = useState([]);
  const [isAddingMode, setIsAddingMode] = useState(false);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  function handleAdd() {
    setIsAddingMode(true);
  }

  return (
    <EventContext.Provider value={{events,setEvents,setIsAddingMode,isAddingMode}}>
      <div className="event-list-app">
        <div className="event-actions">
          <AddEventBtn handleAdd={handleAdd} text="Add New Event" />
        </div>
        <EventTable />
      </div>
    </EventContext.Provider>
  );
}


