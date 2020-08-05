var headerTag = document.createElement("h1");
headerTag.textContent = "DOM Manipulation";
headerTag.style.color = "blue";

document.querySelector(".container").appendChild(headerTag);

var header3 = document.createElement("h3");
header3.textContent = "Todo list";
header3.style.cssText = "color: brown";
document.querySelector(".container").appendChild(header3);

const todos = [
  {
    text: "trip to japan",
    completed: false,
  },
  {
    text: "coding at lakehub academy",
    completed: false,
  },
  {
    text: "using JavaScript to code",
    completed: true,
  },
];

todos.forEach((todo) => {
  var p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector(".container").appendChild(p);
});
