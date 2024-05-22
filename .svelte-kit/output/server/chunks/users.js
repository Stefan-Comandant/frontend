function formatDate(dateStr) {
  if (!dateStr)
    return { ofYear: "", ofDay: "" };
  const date = new Date(dateStr);
  const todayDate = /* @__PURE__ */ new Date();
  const { hour, minute, meridian, day, month, year } = getDateValues(date);
  const time = `${hour}:${minute} ${meridian}`;
  const today = `${getDateValues(todayDate).day}-${getDateValues(todayDate).month}-${getDateValues(todayDate).year}`;
  const yearDate = `${day}-${month}-${year}`;
  return {
    ofDay: time,
    ofYear: today === yearDate ? "Today" : yearDate
  };
}
function getDateValues(date) {
  return {
    minute: date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes(),
    hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    day: date.getDate() > 9 ? date.getDate() : "0" + date.getDate(),
    month: date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth(),
    year: date.getFullYear(),
    meridian: date.getHours() > 12 ? "PM" : "AM"
  };
}
function GetUsername(from = "", members = []) {
  const member = members.filter((member2) => member2.id === from)[0];
  if (!member || !member.username)
    return "";
  return member.username;
}
function getProfilePicture(id = "", members = []) {
  const result = members.filter((member) => member.id === id)[0];
  if (!result || !result.profilepicture)
    return "";
  return result.profilepicture;
}
export {
  GetUsername as G,
  formatDate as f,
  getProfilePicture as g
};
