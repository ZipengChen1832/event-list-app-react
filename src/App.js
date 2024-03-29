import React, { useEffect, useState } from "react";
import AddEventBtn from "./components/AddEventBtn/AddEventBtn";
import EventTable from "./components/EventTable/EventTable";
import EventProvider, { EventContext } from "./context/EventContext";

export default function App() {
  return (
    <EventProvider>
      <div className="event-list-app">
        <div className="event-actions">
          <AddEventBtn text="Add New Event" />
        </div>
        <EventTable />
      </div>
    </EventProvider>
  );
}
