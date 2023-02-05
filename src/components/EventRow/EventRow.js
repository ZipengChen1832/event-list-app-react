import React, { useContext, useEffect, useState } from "react";
import eventAPIs from "../../api/eventAPIs";
import { EventContext } from "../../context/EventContext";
import useEventInputs from "../../hooks/useEventInputs";
import "./eventRow.css";

export default function EventRow({ event }) {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const { events, setEvents } = useContext(EventContext);
  const [eventInputs, handleChange] = useEventInputs(event);

  function handleEdit() {
    setIsEditingMode(true);
  }

  function handleSave() {
    const newEvent = { id: event.id, ...eventInputs };
    eventAPIs.editEvent(event.id, newEvent).then((editedEvent) => {
      setEvents((prev) => {
        return prev.map((pEvent) => {
          if (pEvent.id === event.id) {
            return editedEvent;
          }
          return pEvent;
        });
      });
      setIsEditingMode(false);
    });
  }

  function handleCancel() {
    setIsEditingMode(false);
  }

  function handleDelete() {
    eventAPIs.deleteEvent(event.id).then((res) => {
      setEvents((prev) => {
        return prev.filter((pEvent) => pEvent.id !== event.id);
      });
    });
  }

  const { eventName, startDate, endDate } = event;
  return isEditingMode ? (
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
        <button className="event__btn-save" onClick={handleSave}>
          S
        </button>
        <button className="event__btn-cancel" onClick={handleCancel}>
          C
        </button>
      </td>
    </tr>
  ) : (
    <tr className="event">
      <td className="event__name">{eventName}</td>
      <td className="event__start-date">{startDate}</td>
      <td className="event__end-date">{endDate}</td>
      <td className="event__actions">
        <button className="event__btn-edit" onClick={handleEdit}>
          E
        </button>
        <button className="event__btn-delete" onClick={handleDelete}>
          D
        </button>
      </td>
    </tr>
  );
}
