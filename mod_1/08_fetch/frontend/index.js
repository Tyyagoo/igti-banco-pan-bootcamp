import { fetchAll, fetchEmployees, fetchRoles } from "./lib.js";

const renderLoading = (target) => {
  target.innerHTML = "Loading...";
};

const renderTable = (emp, roles, target) => {
  let rows = emp.map((val, ind, _) => {
    let role = roles.find((v, i, _) => val.role_id === v.id);
    return `<tr><td>${val.id}</td><td>${val.name}</td><td>${role.name}</td></tr>`;
  });

  target.innerHTML = "";
  let table = document.createElement("table");
  table.innerHTML = rows.join("");
  target.appendChild(table);
};

const renderError = (error, target) => {
  target.innerHTML = "Não foi possível carregar os dados :(";
  console.error(error);
};

let root = document.getElementById("root");
renderLoading(root);
try {
  let [employees, roles] = await fetchAll();
  renderTable(employees, roles, root);
} catch (e) {
  renderError(e, root);
}
