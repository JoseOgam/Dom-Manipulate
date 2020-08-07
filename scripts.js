// var headerTag = document.createElement("h1");
// headerTag.textContent = "DOM Manipulation";
// headerTag.style.color = "blue";

// document.querySelector(".container").appendChild(headerTag);

// var header3 = document.createElement("h3");
// header3.textContent = "Todo note";
// header3.style.cssText = "color: brown";
// document.querySelector(".container").appendChild(header3);

var notes = [
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

let notesJSON = localStorage.getItem("notes");
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

const renderNotes = (notes, filters) => {
  var filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  document.querySelector(".container").innerHTML = "";

  filteredNotes.forEach(function (note) {
    var noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector(".container").appendChild(noteEl);
  });
};
renderNotes(notes, filters);

document.querySelector("#search-note").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// notes.map((todo) => {
//   var p = document.createElement("p");
//   p.textContent = todo.title;
//   document.querySelector(".container").appendChild(p);
// });

document.querySelector("#add-notes").addEventListener("click", (e) => {
  notes.push({
    title: "kiss",
    completed: true,
  });
  let saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  saveNotes(notes);
  renderNotes(notes, filters);
});
