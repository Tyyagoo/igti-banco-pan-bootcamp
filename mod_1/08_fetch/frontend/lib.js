const BASE_URL = "http://localhost:3000/";
const endpoints = ["employees", "roles"];

const fetchData = (endpoint) =>
  fetch(`${BASE_URL}${endpoint}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  });

export const fetchEmployees = async () => await fetchData("employees");
export const fetchRoles = async () => await fetchData("roles");
export const fetchAll = async () =>
  await Promise.all([fetchData("employees"), fetchData("roles")]);
