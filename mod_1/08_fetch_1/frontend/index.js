import { fetchAll } from "./lib.js";

const renderTable = (emp, roles, target) => {
  let rows = emp.map((val, ind, _) => {
    let role = roles.find((v, i, _) => val.role_id === v.id);
    return `<tr><td>${val.id}</td><td>${val.name}</td><td>${role.name}</td></tr>`;
  });

  let table = document.createElement("table");
  table.innerHTML = rows.join("");
  target.appendChild(table);
};

let root = document.getElementById("root");
fetchAll().then(([emp, roles]) => renderTable(emp, roles, root));
