import { F as FetchConfig } from "../../../chunks/interfaces.js";
const load = async ({ fetch, parent }) => {
  await parent();
  let groups = {
    status: "",
    response: []
  };
  let chats = {
    status: "",
    response: []
  };
  let users = {
    status: "",
    response: []
  };
  groups = await fetch("http://localhost:9000/api/rooms/broadcast", FetchConfig).then(
    (res) => res.json()
  );
  if (!groups || groups.status !== "success")
    groups.response = [];
  chats = await fetch("http://localhost:9000/api/rooms/direct", FetchConfig).then(
    (res) => res.json()
  );
  if (!chats || chats.status !== "success")
    chats.response = [];
  users = await fetch("http://localhost:9000/api/users", FetchConfig).then(
    (res) => res.json()
  );
  if (!users || users.status !== "success")
    users.response = [];
  return {
    groups: groups.response,
    chats: chats.response,
    users: users.response
  };
};
export {
  load
};
