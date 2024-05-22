import { F as FetchConfig } from "../../../../../chunks/interfaces.js";
const load = async ({ fetch, params, parent }) => {
  await parent();
  let messages = {
    status: "",
    response: []
  };
  let members = {
    status: "",
    response: []
  };
  let room = {
    status: "",
    response: {}
  };
  messages = await fetch(`http://localhost:9000/api/room/${params.id}/messages`, FetchConfig).then(
    (res) => res.json()
  );
  if (!messages || messages.status !== "success")
    messages.response = [];
  members = await fetch(`http://localhost:9000/api/room/${params.id}/members`, FetchConfig).then(
    (res) => res.json()
  );
  if (!members || members.status !== "success")
    members.response = [];
  room = await fetch(`http://localhost:9000/api/room/${params.id}`, FetchConfig).then(
    (res) => res.json()
  );
  if (!room || room.status !== "success")
    room.response = {};
  return {
    messages: messages.response,
    members: members.response,
    room: room.response
  };
};
export {
  load
};
