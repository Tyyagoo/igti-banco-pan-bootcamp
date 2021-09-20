const BASE_URL = "http://localhost:3000";

const HTTP = {
  GET: ({ endpoint }) => fetch(`${BASE_URL}/${endpoint}`),
  POST: ({ endpoint, obj }) =>
    fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }),
  PUT: ({ endpoint, id, obj }) =>
    fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }),
  DELETE: ({ endpoint, id }) =>
    fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
    }),
};

const fetchData = async (args) => {
  let method = args.method;
  let handler = HTTP[method];
  let response = await handler(args);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
};

const getAllFromEndpoint = async (endpoint) => {
  let request = {
    method: "GET",
    endpoint: endpoint,
  };
  return await fetchData(request);
};

export const API = {
  getEmployees: async () => await getAllFromEndpoint("employees"),
  getRoles: async () => await getAllFromEndpoint("roles"),
  deleteEmployee: async (id) => {
    let request = {
      method: "DELETE",
      endpoint: "employees",
      id: id,
    };
    return await fetchData(request);
  },
  updateEmployee: async (id, obj) => {
    let request = {
      method: "PUT",
      endpoint: "employees",
      id,
      obj,
    };
    return await fetchData(request);
  },
  createEmployee: async (obj) => {
    let request = {
      method: "POST",
      endpoint: "employees",
      obj,
    };
    return await fetchData(request);
  },
};
