import { F as FetchConfig } from "../../../../chunks/interfaces.js";
const load = async ({ fetch, params, parent }) => {
  await parent();
  let profile = {
    status: "",
    response: {}
  };
  profile = await fetch(`http://localhost:9000/api/users/${params.id}`, FetchConfig).then(
    (res) => res.json()
  );
  if (!profile || profile.status !== "success")
    profile.response = {
      id: "",
      username: "",
      about: "",
      email: "",
      password: "",
      currency: "",
      balance: 0
    };
  return {
    profile: profile.response
  };
};
export {
  load
};
