const URL = "https://event-list-json-server.onrender.com/events";

export const getEvents = () => {
  return fetch(URL).then((res) => res.json());
};

export const postEvent = (newEvent) => {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  }).then((res) => res.json());
};

export const deleteEvent = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch(console.log);
};

export const editEvent = (id, editedEvent) => {
  return fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedEvent),
  })
    .then((res) => res.json())
    .catch(console.log);
};

const eventAPIs = {
  getEvents,
  postEvent,
  editEvent,
  deleteEvent
}
export default eventAPIs;
