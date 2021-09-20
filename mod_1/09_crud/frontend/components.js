export function createCard({ employee, onClick }) {
  const li = document.createElement("li");
  const divName = document.createElement("div");
  const divRole = document.createElement("div");

  divName.innerHTML = employee.name;
  divRole.innerHTML = employee.role.name;

  li.className = "card-emp";
  li.appendChild(divName);
  li.appendChild(divRole);
  li.addEventListener("click", () => onClick(employee, li));
  return li;
}

export function createEmployeesList({
  employees,
  roles,
  listElement,
  onClick,
}) {
  employees.forEach((emp) => {
    let employee = {
      ...emp,
      role: roles.find((r) => r.id === emp.role_id),
    };
    let card = createCard({ employee, onClick });
    listElement.appendChild(card);
  });
}

export function clearEmployeeList({ listElement }) {
  while (listElement.lastChild != null) {
    listElement.removeChild(listElement.lastChild);
  }
}

export function refreshEmployeeList(store) {
  clearEmployeeList(store);
  createEmployeesList(store);
}

export function setupRoles({ roles, formElement }) {
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "None";
  defaultOption.value = 0;
  formElement.role.appendChild(defaultOption);

  roles.forEach((role, ind, _) => {
    const option = document.createElement("option");
    option.textContent = role.name;
    option.value = role.id;
    formElement.role.appendChild(option);
  });
}
