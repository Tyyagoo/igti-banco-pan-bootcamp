const BASE_URL = "http://localhost:3000/";

const HTTP = {
  GET: ({ endpoint }) => fetch(`${BASE_URL}${endpoint}`),
};

const fetchData = async (args) => {
  let { method, endpoint } = args;
  let handler = HTTP[method];
  let response = await handler(args);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
};

export const API = {
  getRoles: async () => {
    let req = {
      method: "GET",
      endpoint: "roles",
    };
    return await fetchData(req);
  },

  getEmployees: async () => {
    let req = {
      method: "GET",
      endpoint: "employees",
    };
    return await fetchData(req);
  },
};
