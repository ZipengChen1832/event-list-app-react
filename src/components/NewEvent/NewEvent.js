import React, { useContext, useState } from "react";
import eventAPIs from "../../api/eventAPIs";
import { EventContext } from "../../context/EventContext";
import useEventInputs from "../../hooks/useEventInputs";
import "./newEvent.css";
export default function NewEvent() {
  const { setIsAddingMode, setEvents } = useContext(EventContext);
  const [eventInputs,handleChange] = useEventInputs()

  function handleAdd() {
    eventAPIs.postEvent(eventInputs).then((newEvent) => {
      setEvents((prev) => [...prev, { ...eventInputs, id: newEvent.id }]);
      setIsAddingMode(false);
    });
  }

  function handleCancel() {
    setIsAddingMode(false);
  }

  return (
    <tr className="event">
      <td>
        <input
          name="eventName"
          className="event__name"
          type="text"
          value={eventInputs.eventName}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="startDate"
          className="event__start-date"
          type="date"
          value={eventInputs.startDate}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="endDate"
          className="event__end-date"
          type="date"
          value={eventInputs.endDate}
          onChange={handleChange}
        />
      </td>
      <td className="event__actions">
        <button className="event__btn-save" onClick={handleAdd}>
          S
        </button>
        <button className="event__btn-cancel" onClick={handleCancel}>
          C
        </button>
      </td>
    </tr>
  );
}
