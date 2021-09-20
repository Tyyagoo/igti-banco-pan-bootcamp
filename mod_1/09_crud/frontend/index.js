import { API } from "./lib.js";
import * as Components from "./components.js";

const store = {
  rootElement: document.getElementById("root"),
  listElement: document.getElementById("emp_list"),
  formElement: document.querySelector("form"),
  deleteButton: document.getElementById("btn_delete"),
  cancelButton: document.getElementById("btn_cancel"),
  saveButton: document.getElementById("btn_save"),
  employees: await API.getEmployees(),
  roles: await API.getRoles(),
  selectedEmployee: null,
};

const exists = (obj) => obj != null;

const selectEmployee = (employee, listItemElement) => {
  if (exists(store.selectedEmployee)) {
    unselectEmployee();
  }
  store.selectedEmployee = employee;
  listItemElement.classList.add("emp-selected");
  store.formElement.name.value = employee.name;
  store.formElement.salary.valueAsNumber = employee.salary;
  store.formElement.role.value = employee.role_id;

  store.deleteButton.style.display = "inline";
  store.cancelButton.style.display = "inline";

  store.saveButton.textContent = "Update";
};

const unselectEmployee = () => {
  store.selectedEmployee = null;
  let oldListItem = document.querySelector(".emp-selected");
  if (exists(oldListItem)) {
    oldListItem.classList.remove("emp-selected");
  }
  store.formElement.name.value = "";
  store.formElement.salary.value = "";
  store.formElement.role.value = 0;

  store.deleteButton.style.display = "none";
  store.cancelButton.style.display = "none";

  store.saveButton.textContent = "Create";
};

const saveEmployee = async () => {
  const empData = {
    name: store.formElement.name.value,
    salary: store.formElement.salary.valueAsNumber | 0,
    role_id: +store.formElement.role.value | 0,
  };

  if (empData.name && empData.salary && empData.role_id) {
    if (exists(store.selectedEmployee)) {
      let index = store.employees.findIndex(
        (val) => store.selectedEmployee.id === val.id
      );

      let emp = {
        ...empData,
        id: store.selectedEmployee.id,
      };
      store.employees[index] = {
        ...emp,
        role: store.selectedEmployee.role,
      };
      API.updateEmployee(emp.id, emp);
      Components.refreshEmployeeList({ ...store, onClick: selectEmployee });
      unselectEmployee();
    } else {
      let created = await API.createEmployee(empData);
      console.log(created);
      store.employees[created.id - 1] = {
        ...created,
        role: store.roles.find((val) => val.id === created.role_id),
      };
      Components.refreshEmployeeList({ ...store, onClick: selectEmployee });
      unselectEmployee();
    }
  } else {
    console.log("You have to fill all fields.");
  }
};

const deleteEmployee = () => {
  let emp = store.selectedEmployee;
  if (exists(emp)) {
    API.deleteEmployee(emp.id);
    store.employees = store.employees.filter((val) => val.id !== emp.id);
    Components.refreshEmployeeList({ ...store, onClick: selectEmployee });
    unselectEmployee();
  }
};

store.cancelButton.addEventListener("click", unselectEmployee);
store.saveButton.addEventListener("click", saveEmployee);
store.deleteButton.addEventListener("click", deleteEmployee);

unselectEmployee();
Components.createEmployeesList({ ...store, onClick: selectEmployee });
Components.setupRoles(store);
