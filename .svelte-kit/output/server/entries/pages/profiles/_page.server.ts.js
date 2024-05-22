import { F as FetchConfig } from "../../../chunks/interfaces.js";
const load = async ({ parent, fetch }) => {
  await parent();
  let profiles = {};
  profiles = await fetch(`http://localhost:9000/api/users`, FetchConfig).then(
    (res) => res.json()
  );
  if (!profiles || profiles.status !== "success")
    profiles.response = [];
  return {
    profiles: profiles.response
  };
};
export {
  load
};
