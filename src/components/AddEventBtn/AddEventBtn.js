import React from "react";
import "./AddEventBtn.css";
import { useEvent } from "../../context/EventContext";

export default function AddEventBtn({ text }) {
  const { handleAdd } = useEvent();
  return (
    <button className="btn-add-event" onClick={handleAdd}>
      {text}
    </button>
  );
}
