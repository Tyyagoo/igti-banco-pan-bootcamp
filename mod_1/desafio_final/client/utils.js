import { API } from "./api.js";

export const initializeStore = async () => {
  let roles = await API.getRoles();
  let employees = await API.getEmployees();

  return {
    roles,
    employees: employees.map((emp) => ({
      ...emp,
      role: roles.find((r) => r.id === emp.role_id),
    })),
    rootElement: document.getElementById("root"),
    sortByElement: document.getElementById("sortBy"),
    rolesFilterElement: document.getElementById("rolesFilter"),
    tableElement: document.getElementById("tableBody"),
  };
};

export const initializeRolesFilter = ({ roles, rolesFilterElement }) => {
  const mapToCheckboxWithLabel = (role) => {
    let label = document.createElement("label");
    label.textContent = role.name;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = role.id;
    label.appendChild(checkbox);
    return label;
  };

  roles
    .map(mapToCheckboxWithLabel)
    .forEach((checkbox) => rolesFilterElement.appendChild(checkbox));
};

export const removeAllChildren = (element) => {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
};

export const updateTable = ({ employees, tableElement }) => {
  const insertToTableRow = (emp) => {
    let row = tableElement.insertRow(-1);
    let id_cell = row.insertCell(0);
    let name_cell = row.insertCell(1);
    let role_cell = row.insertCell(2);
    let salary_cell = row.insertCell(3);

    id_cell.textContent = emp.id;
    name_cell.textContent = emp.name;
    role_cell.textContent = emp.role.name;
    salary_cell.textContent = emp.salary;
  };

  removeAllChildren(tableElement);
  employees.forEach(insertToTableRow);
};
