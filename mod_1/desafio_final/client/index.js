import {
  initializeStore,
  initializeRolesFilter,
  updateTable,
} from "./utils.js";

const STORE = await initializeStore();
console.log(STORE);
initializeRolesFilter(STORE);
updateTable(STORE);
