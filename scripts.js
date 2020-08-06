// var headerTag = document.createElement("h1");
// headerTag.textContent = "DOM Manipulation";
// headerTag.style.color = "blue";

// document.querySelector(".container").appendChild(headerTag);

// var header3 = document.createElement("h3");
// header3.textContent = "Todo note";
// header3.style.cssText = "color: brown";
// document.querySelector(".container").appendChild(header3);

const notes = [
  {
    title: "trip to japan",
    completed: false,
  },
  {
    title: "coding at lakehub academy",
    completed: false,
  },
  {
    title: "using JavaScript to code",
    completed: true,
  },
  {
    title: "trip to lowdwar",
    completed: false,
  },
];

let filters = {
  searchText: "",
};

const renderMovies = (notes, filters) => {
  var filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector(".container").innerHTML = "";

  filteredNotes.forEach(function (note) {
    var noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector(".container").appendChild(noteEl);
  });
};
renderMovies(notes, filters);

document.querySelector("#search-note").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderMovies(notes, filters);
});

// notes.map((todo) => {
//   var p = document.createElement("p");
//   p.textContent = todo.title;
//   document.querySelector(".container").appendChild(p);
// });
