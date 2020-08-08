let addTodo = document.querySelector(".addTodo");
let deleteIcon = document.querySelector(".deleteIcon");
let todosList = document.querySelector(".todosList");
let searchText = document.querySelector("searchText");

let createTemplate = (todo) => {
  var htmlEl = ` <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt deleteIcon"></i>
        </li>`;
  todosList.innerHTML += htmlEl;
};

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  var todo = addTodo.add.value.trim();

  if (todo.length) {
    createTemplate(todo);
    addTodo.reset();
  }
});
