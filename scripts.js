let addTodo = document.querySelector(".addTodo");
let deleteIcon = document.querySelector(".deleteIcon");
let todosList = document.querySelector(".todosList");
let searchText = document.querySelector(".searchText");

//function creating html template for each todo added
let createTemplate = (todo) => {
  var htmlEl = ` <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt deleteIcon"></i>
        </li>`;
  todosList.innerHTML += htmlEl;
};

//function responsible for adding todo
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  var todo = addTodo.add.value.trim();

  if (todo.length) {
    createTemplate(todo);
    addTodo.reset();
  }
});

//delete todo
todosList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteIcon")) {
    e.target.parentElement.remove();
  }
});

//search todos
const filteredTodos = (condition) => {
  Array.from(todosList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(condition))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(todosList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(condition))
    .forEach((todo) => todo.classList.remove("filtered"));
};

searchText.addEventListener("keyup", () => {
  const condition = searchText.value.trim().toLowerCase();

  filteredTodos(condition);
});

// try {
//   // throw new Error("my custom error");
//   let car = newCar;
// } catch (e) {
//   console.log("e", e);
// } finally {
//   console.log("this will always print");
// }

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(reject, 1000, "someValue");
// });

// promise.then(
//   (value) => console.log("fulfilled :" + value),
//   (error) => console.log("rejected :" + error)
// );
