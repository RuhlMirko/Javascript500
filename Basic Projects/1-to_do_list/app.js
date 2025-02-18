/*
const allBtn = document.querySelector("#filter-all");
const activeBtn = document.querySelector("#filter-active");
const completeBtn = document.querySelector("#filter-completed");
*/

const addBtn = document.querySelector("#add-button");

function addTask() {
  const newTask = document.querySelector("#new-task").value.trim();
  if (newTask) {
    const taskList = document.querySelector("#task-list");
    const rawHtml = `<li>
  <input type='checkbox'>
  <span>${newTask}</span>
  <button>Edit</button>
  <button>Delete</button>
  </li>`;
    taskList.insertAdjacentHTML("afterbegin", rawHtml);
  }
  document.querySelector("#new-task").value = "";
}

addBtn.addEventListener("click", addTask);
