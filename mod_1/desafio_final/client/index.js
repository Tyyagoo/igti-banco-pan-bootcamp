import {
  initializeStore,
  initializeRolesFilter,
  updateTable,
} from "./utils.js";

const STORE = await initializeStore();

const orderBy = {
  ascending: (a, b) => (a === b ? 0 : a > b ? 1 : -1),
  descending: (a, b) => (a === b ? 0 : a < b ? 1 : -1),
};

const sortMode = {
  name_asc: (a, b) => orderBy.ascending(a.name, b.name),
  name_desc: (a, b) => orderBy.descending(a.name, b.name),
  salary_asc: (a, b) => orderBy.ascending(a.salary, b.salary),
  salary_desc: (a, b) => orderBy.descending(a.salary, b.salary),
};

const hasSomeRole = (role_id, roles_ids) => {
  if (roles_ids.length === 0) {
    return true;
  } else {
    return roles_ids.some((val) => val === role_id);
  }
};

function onSortByChange() {
  let sortChoice = STORE.sortByElement.value;
  STORE.employees.sort((a, b) => sortMode[sortChoice](a, b));
  onRoleFilterChange();
}

function onRoleFilterChange() {
  let selectedNodes = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  );
  let roles_ids = selectedNodes.map((val) => +val.value);
  let employees = STORE.employees.filter((emp) =>
    hasSomeRole(emp.role_id, roles_ids)
  );

  updateTable({
    ...STORE,
    employees,
    quantity: employees.length,
  });
}

STORE.sortByElement.addEventListener("change", onSortByChange);
STORE.rolesFilterElement.addEventListener("change", onRoleFilterChange);

initializeRolesFilter(STORE);
onSortByChange(STORE);
