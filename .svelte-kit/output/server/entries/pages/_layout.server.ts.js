import { F as FetchConfig } from "../../chunks/interfaces.js";
import { r as redirect } from "../../chunks/index.js";
const load = async ({ cookies, route, fetch }) => {
  const cookie = cookies.get("session_cookie");
  let userData = {
    status: "",
    response: {}
  };
  if (!cookie) {
    if (!["/login", "/register", "/authorize/[id]"].includes(route.id))
      redirect(303, "/login");
    return { USER: userData.response };
  }
  userData = await fetch("http://localhost:9000/api/getUserData", FetchConfig).then(
    (res) => res.json()
  );
  if (!userData || userData.status !== "success")
    userData.response = {};
  return {
    USER: userData.response
  };
};
export {
  load
};
