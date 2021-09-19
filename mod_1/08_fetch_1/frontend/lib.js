const BASE_URL = "http://localhost:3000/";
const endpoints = ["employees", "roles"];

const fetchData = (endpoint) =>
  fetch(`${BASE_URL}${endpoint}`).then((res) => res.json());

export const fetchAll = () =>
  Promise.all([fetchData("employees"), fetchData("roles")]);
