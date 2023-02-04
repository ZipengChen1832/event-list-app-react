import React, { useEffect, useState } from "react";

export default function useEventInputs(
  event,
  inputsValue = {
    eventName: "",
    startDate: "",
    endDate: "",
  }
) {
  const [eventInputs, setEventInputs] = useState(inputsValue);

  useEffect(() => {
    if (!event) setEventInputs(inputsValue);
    else {
      const { id, ...eventInfo } = event;
      // console.log(id,eventInfo);
      setEventInputs(eventInfo);
    }
  }, [event]);

  function handleChange(e) {
    setEventInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return [eventInputs, handleChange];
}
