const searchElement = document.getElementById("search");
const listElement = document.getElementById("list");
const clockElement = document.getElementById("clock");
const toggleButton = document.getElementById("toggle");
let interval;

async function search(query) {
  if (query) {
    let url = `http://localhost:3000/employees?q=${encodeURIComponent(query)}`;
    let response = await fetch(url);
    if (response.ok) {
      let employees = await response.json();
      listElement.innerHTML = employees
        .map((emp) => `<li>${emp.name}</li>`)
        .join("");
    } else {
      listElement.innerHTML = "";
      throw new Error(response.statusText);
    }
  } else {
    listElement.innerHTML = "";
  }
}

function onQueryChange() {
  search(searchElement.value);
}

function fnWithDelay(fn, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}

function onToggle() {
  if (interval) {
    toggleButton.innerHTML = "Resume";
    clearInterval(interval);
    interval = undefined;
  } else {
    toggleButton.innerHTML = "Pause";
    setClock();
  }
}

function setClock() {
  interval = setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    clockElement.innerHTML = `${hours.padStart(2, "0")}:${minutes.padStart(
      2,
      "0"
    )}:${seconds.padStart(2, "0")}`;
  }, 1000);
}

function initialize() {
  searchElement.addEventListener("input", fnWithDelay(onQueryChange, 400));
  toggleButton.addEventListener("click", onToggle);
  onToggle();
}

initialize();
