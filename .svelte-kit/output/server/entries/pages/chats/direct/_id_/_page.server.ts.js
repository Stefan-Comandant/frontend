import { F as FetchConfig } from "../../../../../chunks/interfaces.js";
const load = async ({ fetch, params, parent }) => {
  const data = await parent();
  let messages = {
    status: "",
    response: []
  };
  let room = {
    status: "",
    response: {}
  };
  let peer = {
    status: "",
    response: {}
  };
  messages = await fetch(`http://localhost:9000/api/room/${params.id}/messages`, FetchConfig).then(
    (res) => res.json()
  );
  if (!messages || messages.status !== "success")
    messages.response = [];
  room = await fetch(`http://localhost:9000/api/room/${params.id}`, FetchConfig).then(
    (res) => res.json()
  );
  if (!room || room.status !== "success")
    room.response = {};
  const shit = room.response?.members?.filter((member) => member != data.USER.id)[0];
  peer = await fetch(`http://localhost:9000/api/users/${shit}`, FetchConfig).then(
    (res) => res.json()
  );
  if (!peer || peer.status !== "success")
    peer.response = {};
  return {
    messages: messages.response,
    USER: data.USER,
    peer: peer.response
  };
};
export {
  load
};
